import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";

const faqItems = [
    {
        question: "What is Brain OS?",
        answer:
            "Brain OS is a personal knowledge and memory system that turns your digital activity into a searchable, contextual knowledge base. Instead of relying on filenames or exact keywords, you can ask questions in natural language and retrieve information from your past work.",
    },

    {
        question: "What can Brain OS remember?",
        answer:
            "Brain OS can build context from sources such as files and documents, browser activity, terminal commands, application usage, and screenshots. These activities are organised into sessions and transformed into semantic memories that can be recalled later.",
    },

    {
        question: "Can I search using normal language?",
        answer:
            "Yes. Brain OS is designed for natural-language queries such as asking what you worked on recently, finding information related to a particular topic, or locating something based on its meaning rather than remembering an exact filename or keyword.",
    },

    {
        question: "How does Brain OS understand what I'm looking for?",
        answer:
            "Brain OS first analyses the intent of your query and determines an appropriate retrieval strategy. It can combine keyword search, semantic vector search, and temporal context to find relevant memories before generating a grounded response.",
    },

    {
        question: "Can Brain OS understand screenshots and images?",
        answer:
            "Yes. Brain OS supports multimodal processing for image-based activity such as screenshots and diagrams. It can use OCR when an image contains significant text and route visually rich content to a vision model for deeper interpretation.",
    },

    {
        question: "Can I verify where an answer came from?",
        answer:
            "Yes. Brain OS is designed to provide inline citations with its responses. These references can point back to the underlying files, terminal commands, browser sessions, or other captured context so you can verify the information behind an answer.",
    },

    {
        question: "Is my data stored locally?",
        answer:
            "Brain OS is designed around a privacy-first, local knowledge store. The desktop application maintains captured activity, semantic memories, metadata, and retrieval indexes locally rather than depending on an external database for your personal knowledge base.",
    },

    {
        question: "What platforms will Brain OS support?",
        answer:
            "Brain OS is being developed as a cross-platform desktop application for Windows, macOS, and Linux. The application uses Electron to provide native desktop integration across these platforms.",
    },

    // {
    //     question: "Is Brain OS available to download now?",
    //     answer:
    //         "Not yet. Brain OS is currently being prepared for release. Verified desktop builds for Windows, macOS, and Linux will be published on the download page when they are ready.",
    // },

    {
        question: "How can I know when Brain OS is released?",
        answer:
            "You can pre-register your interest to receive updates about availability. The download page will also provide the official builds and release information once Brain OS is ready.",
    },
    {
        question: "What are the system requirements for Brain OS?",
        answer:
            "Brain OS is designed to run on standard 64-bit desktop computers. The minimum requirements are a basic dual-core processor, 2 GB of RAM, and approximately 200–300 MB of storage for the application. 4 GB of RAM is recommended for better performance. Brain OS supports Windows, macOS, and Linux.",
    },
];

export default function FAQ() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="w-full scroll-mt-24 bg-[#11110f] px-6 pb-20 pt-32 font-sans text-zinc-100 md:px-16 md:pt-36 lg:px-24"
        >
            <div className="mx-auto w-full max-w-7xl">
                <Link
                    href="/"
                    className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                    <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                    Back to Brain OS
                </Link>
            </div>
            <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-5 lg:gap-16 translate-y-8">
                <div className="lg:col-span-2">
                    <p className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-widest text-[#e6ff6a]">
                        FAQ
                    </p>
                    <h2
                        id="faq-heading"
                        className="max-w-lg text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl"
                    >
                        A few things you might be wondering.
                    </h2>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400 sm:text-base">
                        Learn more about Brain OS, how it is designed to handle your
                        information, and when you can try it.
                    </p>
                </div>

                <div className="divide-y divide-zinc-800 border-y border-zinc-800 lg:col-span-3">
                    {faqItems.map(({ question, answer }) => (
                        <details key={question} className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-base font-medium text-zinc-200 transition-colors hover:text-[#e6ff6a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#e6ff6a] sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                                {question}
                                <Plus
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#e6ff6a] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                                />
                            </summary>
                            <p className="max-w-2xl pb-6 pr-8 text-sm leading-relaxed text-zinc-400 sm:text-base">
                                {answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}