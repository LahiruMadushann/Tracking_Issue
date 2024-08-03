import WelcomeTemplate from "@/emails/welcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
    await resend.emails.send({
        from: '...',
        to: 'lahirumadushandl@gmail.com',
        subject: '...',
        react: <WelcomeTemplate name="Lahiru" />
    })

    return NextResponse.json({})
}