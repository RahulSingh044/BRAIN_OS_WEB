interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate = ({
    name,
    email,
    subject,
    message,
}: EmailTemplateProps) => {
    return (
        <div
            style={{
                fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                backgroundColor: "#f4f5f7",
                padding: "40px 20px",
                color: "#333333",
            }}
        >
            <div
                style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                    border: "1px solid #eaeaec",
                }}
            >
                {/* Header Bar */}
                <div
                    style={{
                        backgroundColor: "#2563eb",
                        padding: "24px 32px",
                        color: "#ffffff",
                    }}
                >
                    <h2
                        style={{
                            margin: 0,
                            fontSize: "20px",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                        }}
                    >
                        New Contact Form Submission
                    </h2>
                </div>

                {/* Content Body */}
                <div style={{ padding: "32px" }}>
                    {/* Sender Details */}
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            marginBottom: "24px",
                        }}
                    >
                        <tbody>
                            <tr>
                                <td style={{ padding: "8px 0", width: "100px", color: "#6b7280", fontSize: "14px", fontWeight: "600" }}>Name:</td>
                                <td style={{ padding: "8px 0", color: "#111827", fontSize: "15px" }}>{name}</td>
                            </tr>
                            <tr>
                                <td style={{ padding: "8px 0", width: "100px", color: "#6b7280", fontSize: "14px", fontWeight: "600" }}>Email:</td>
                                <td style={{ padding: "8px 0", color: "#111827", fontSize: "15px" }}>
                                    <a href={`mailto:${email}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                                        {email}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "8px 0", width: "100px", color: "#6b7280", fontSize: "14px", fontWeight: "600" }}>Subject:</td>
                                <td style={{ padding: "8px 0", color: "#111827", fontSize: "15px" }}>{subject}</td>
                            </tr>
                        </tbody>
                    </table>

                    <hr style={{ border: "none", borderTop: "1px solid #eaeaec", margin: "24px 0" }} />

                    {/* Message Section */}
                    <p
                        style={{
                            margin: "0 0 12px 0",
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Message
                    </p>

                    <div
                        style={{
                            backgroundColor: "#f9fafb",
                            border: "1px solid #f3f4f6",
                            borderRadius: "6px",
                            padding: "16px 20px",
                            fontSize: "15px",
                            lineHeight: "1.6",
                            color: "#374151",
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        {message}
                    </div>
                </div>

                {/* Footer */}
                <div
                    style={{
                        backgroundColor: "#f9fafb",
                        padding: "16px 32px",
                        textAlign: "center",
                        borderTop: "1px solid #eaeaec",
                        fontSize: "12px",
                        color: "#9ca3af",
                    }}
                >
                    This email was sent from your website contact form.
                </div>
            </div>
        </div>
    );
};