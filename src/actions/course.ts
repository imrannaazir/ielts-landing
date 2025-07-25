"use server";

import { env } from "@/lib/env";

export async function fetchIELTSCourse(lang = "en") {
  try {
    const url = `${env.apiUrl}/products/ielts-course?lang=${lang}`;

    const response = await fetch(url, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600, // Revalidate every 1 hour
        tags: [`ielts-course-${lang}`], // Cache tag for targeted revalidation
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching IELTS course:", error);
    throw error;
  }
}
