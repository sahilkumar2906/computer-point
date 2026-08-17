import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const studentName = formData.get("studentName");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const document = formData.get("document");

    if (!studentName || !email || !mobile) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    // TODO (production): persist the application (database or spreadsheet), store the
    // uploaded document (e.g. S3, Cloudinary, or Google Drive API), and notify your team.
    const fileName = document instanceof File ? document.name : null;
    console.log("New scholarship application:", { studentName, email, mobile, fileName });

    const referenceId = `SCH-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({ success: true, referenceId });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to process application." }, { status: 500 });
  }
}
