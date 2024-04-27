"use server";

import React from "react";
import { Resend } from "resend";
import QuizzaraEmail from "@/email/quizzara-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async(formData: FormData) => {
    const sender = formData.get('email');
    const message = formData.get('message');
    const name = formData.get('name');

    if (!message || typeof message !== "string"){
        return {
            error: 'Invalid message',
        }
    }

    try {
        await resend.emails.send({
            from: 'Quizzara Website <no_reply@shaad.io>',
            to: [process.env.EMAIL as string], // we'll store our emails in .env.local
            bcc: [process.env.SEC_EMAIL as string], // we'll store our emails in .env.local
            subject: "New Message",
            reply_to: sender as string,
            react: React.createElement(QuizzaraEmail, {
                message: message as string,
                name: name as string,
                email: sender as string,
            })
        })
    } catch (e){
        return console.log('Error', e);
    }
}