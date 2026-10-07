"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}: SendEmailPayload) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["rahulsingh.dev.36@gmail.com"],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      react: (
        <EmailTemplate
          name={name}
          email={email}
          subject={subject}
          message={message}
        />
      ),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        data: null,
        error,
      };
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email",);
  }
};
