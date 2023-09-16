'use server';

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_EMAIL_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, MAX_EMAIL_LENGTH)) {
        return {
            error: "Invalid email"
        };
    }

    if (!validateString(message, MAX_MESSAGE_LENGTH)) {
        return {
            error: "Invalid message"
        };
    }

    try {
        await resend.emails.send({
            from: "Contact form <onboarding@resend.dev>",
            to: 'g.hislop@live.nl',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string })
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        };
    }
};
