"use server";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export default async function uploadData(recipename: string, ingredients: string, directions: string): Promise<{message: string} | { error: string }> {
  try {
    // Insert the data into the database
    await db.insert(posts).values({ recipename, ingredients, directions });

    // Return a success message or the inserted data
    return { message: "Data uploaded successfully!"};
  } catch (error) {
    console.error("Error uploading data:", error);
    return { error: "Failed to upload data." };
  }
}
