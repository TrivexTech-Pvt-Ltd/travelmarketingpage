import { NextResponse } from "next/server";
import { insertReview, getAllReviews } from "./../../lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

    console.log("Form Data from API:", body);

    const { success, result, error } = await insertReview(body);
    // You can process or save the data to DB here
    if (success) {
      return NextResponse.json({
        success: true,
        message: "Review submitted successfully!",
      });
    } else {
      return NextResponse.json(
        { success: false, message: error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const result = await getAllReviews();
  return NextResponse.json(result);
}
