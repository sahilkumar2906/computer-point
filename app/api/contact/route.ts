import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data?.name || !data?.mobile || !data?.email || !data?.message) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    // TODO (production): send a notification email/SMS (e.g. via Resend or Nodemailer),
    // and/or store the enquiry in a database or Google Sheet.
    console.log("New contact enquiry:", data);

    return NextResponse.json({ success: true, message: "Enquiry received." });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to process request." }, { status: 500 });
  }
}
