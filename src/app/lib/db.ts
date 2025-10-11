import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

interface ReviewForm {
  name: string;
  email: string;
  location?: string; // optional
  package?: string; // optional
  review: string;
  rating?: number; // optional
}

export async function insertReview(body: ReviewForm) {
  try {
    const {
      name,
      email,
      location,
      package: travelPackage,
      review,
      rating,
    } = body;

    if (!name || !email || !review) {
      throw new Error("Name, email, and review are required");
    }

    const result = await db.execute(
      `
      INSERT INTO inquery (name, email, location, package, review, rating)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [name, email, location || "", travelPackage || "", review, rating || 0]
    );

    return { success: true, result };
  } catch (error) {
    console.error("Error inserting review:", error);
    return { success: false, error: (error as Error).message };
  }
}

export async function getAllReviews() {
  try {
    const result = await db.execute(`
      SELECT name, email, location, package, review, rating
      FROM inquery
      ORDER BY id DESC
      LIMIT 10
    `);

    return { success: true, reviews: result.rows };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { success: false, error: (error as Error).message };
  }
}
