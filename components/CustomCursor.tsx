    "use client";

    import { useEffect, useRef, useState } from "react";

    const TRAIL_LENGTH = 10;
    const CURSOR_COLOR = "#d4ff00";

    const BrainSvg = ({ size }: { size: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
        // Stacking multiple drop shadows:
        // 1. A tight black outline to make it pop on green/white backgrounds
        // 2. A softer black shadow for depth
        // 3. A strong neon green glow for the black backgrounds
        filter: "drop-shadow(0px 0px 1px rgba(0,0,0, 1)) drop-shadow(0px 0px 3px rgba(0,0,0, 0.8)) drop-shadow(0 0 6px rgba(212,255,0,0.8))",
        }}
    >
        <path
        d="M12 5C12 3.89543 11.1046 3 10 3C7.5 3 6.16667 4.5 5.5 6C3.5 6.5 2 8.5 2 11C2 13 3 14 4.5 14.5C4.2 15.5 4.5 17 5.5 18C6.5 19 8 19.5 9 18.5C9.5 19.5 10.5 20 12 20C13.5 20 14.5 19.5 15 18.5C16 19.5 17.5 19 18.5 18C19.5 17 19.8 15.5 19.5 14.5C21 14 22 13 22 11C22 8.5 20.5 6.5 18.5 6C17.8333 4.5 16.5 3 14 3C12.8954 3 12 3.89543 12 5Z"
        stroke={CURSOR_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        <path
        d="M12 5V19M12 12H15.5"
        stroke={CURSOR_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        <circle cx="16.5" cy="12" r="1.5" fill={CURSOR_COLOR} />
        <path d="M7 11C7.5 11 8 11.5 8 12C8 12.5 7.5 13 7 13C6.5 13 6 12.5 6 12" stroke={CURSOR_COLOR} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 8C10.5 8 10.5 8.5 10.5 9" stroke={CURSOR_COLOR} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
    );

    export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const mouse = useRef({ x: 0, y: 0 });
    const trailPositions = useRef(Array(TRAIL_LENGTH).fill({ x: 0, y: 0 }));

    useEffect(() => {
        document.body.style.cursor = "none";

        const updateMousePosition = (e: MouseEvent | DragEvent) => {
        // Some browsers report 0,0 at the end of a drag event, so we ignore it to prevent the cursor from jumping to top-left
        if ((e.type === 'drag' || e.type === 'dragend') && e.clientX === 0 && e.clientY === 0) {
            return;
        }
        mouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a, button, input, textarea, [role="button"]')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
        };

        const handleDragStart = () => setIsDragging(true);
        const handleDragEnd = () => setIsDragging(false);

        // Standard mouse events
        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);
        
        // HTML5 Drag and Drop events
        window.addEventListener("dragstart", handleDragStart);
        window.addEventListener("dragend", handleDragEnd);
        window.addEventListener("drag", updateMousePosition as any);
        window.addEventListener("dragover", updateMousePosition as any);

        let animationFrameId: number;

        const render = () => {
        // Main cursor position tracking wrapper (NO CSS transitions applied here)
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
        }

        const positions = trailPositions.current;
        positions[0] = { ...mouse.current };
        
        for (let i = 1; i < TRAIL_LENGTH; i++) {
            const prev = positions[i - 1];
            const current = positions[i];
            
            current.x += (prev.x - current.x) * 0.4;
            current.y += (prev.y - current.y) * 0.4;
            
            const dx = prev.x - current.x;
            const dy = prev.y - current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (trailRefs.current[i]) {
            const el = trailRefs.current[i]!;
            // Trail wrapper tracks position instantly
            el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
            
            const baseOpacity = (1 - i / TRAIL_LENGTH) * 0.4;
            const dynamicOpacity = Math.min(baseOpacity, distance * 0.05);
            el.style.opacity = dynamicOpacity.toString();
            }
        }

        animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
        document.body.style.cursor = "auto";
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mouseover", handleMouseOver);
        window.removeEventListener("dragstart", handleDragStart);
        window.removeEventListener("dragend", handleDragEnd);
        window.removeEventListener("drag", updateMousePosition as any);
        window.removeEventListener("dragover", updateMousePosition as any);
        cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] w-0 h-0 text-[#d4ff00]">
            {/* Trail */}
            {Array.from({ length: TRAIL_LENGTH }).map((_, i) => {
            if (i === 0) return null;
            return (
                <div
                key={i}
                ref={(el) => { trailRefs.current[i] = el; }}
                className="absolute top-0 left-0"
                style={{ opacity: 0 }}
                >
                <div 
                    className="absolute top-0 left-0 flex items-center justify-center"
                    style={{
                    transform: `translate(-50%, -50%) scale(${Math.max(0.3, 1 - (i / TRAIL_LENGTH) * 0.7)})`,
                    filter: "blur(1px)",
                    }}
                >
                    <BrainSvg size={38} />
                </div>
                </div>
            );
            })}

            {/* Main Cursor Position Tracker */}
            <div ref={cursorRef} className="absolute top-0 left-0">
            {/* Animated Scaling Wrapper */}
            <div
                className="absolute top-0 left-0 flex items-center justify-center transition-transform duration-200 ease-out"
                style={{
                transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : (isHovering ? 1.1 : 1)})`,
                transformOrigin: 'center'
                }}
            >
                {/* Hover Circle Glow */}
                <div 
                className="absolute rounded-full transition-all duration-300 ease-out"
                style={{
                    width: '62px',
                    height: '62px',
                    border: `1.5px solid ${CURSOR_COLOR}`,
                    opacity: isHovering ? 0.7 : 0,
                    scale: isHovering ? 1 : 0.8,
                    boxShadow: `0 0 15px ${CURSOR_COLOR}60, inset 0 0 15px ${CURSOR_COLOR}60, 0 0 8px rgba(0,0,0,0.8)`,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    filter: 'blur(0.5px)'
                }}
                />
                
                <div className="relative flex items-center justify-center">
                {/* Dark background shadow core for the brain to guarantee visibility */}
                <div className="absolute w-[32px] h-[32px] bg-black rounded-full blur-[7px] opacity-80" />
                
                <div className="relative">
                    <BrainSvg size={38} />
                </div>
                
                {/* Drag + Icon */}
                <div 
                    className="absolute bottom-0 right-0 bg-black/90 rounded-full flex items-center justify-center transition-opacity duration-200"
                    style={{ 
                    width: '16px', 
                    height: '16px', 
                    border: `1.5px solid ${CURSOR_COLOR}`,
                    color: CURSOR_COLOR,
                    opacity: isDragging ? 1 : 0,
                    transform: 'translate(10%, 10%)',
                    boxShadow: `0 0 6px rgba(0,0,0,1), 0 0 5px ${CURSOR_COLOR}`
                    }}
                >
                    <span className="text-[11px] font-bold leading-none">+</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
    }