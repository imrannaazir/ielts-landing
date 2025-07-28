"use server";

import { env } from "@/lib/env";
import { ApiResponse, Language } from "@/types";

export async function fetchIELTSCourse(lang: Language = "bn"):Promise<ApiResponse> {
  try {
    const url = `${env.apiUrl}/products/ielts-course?lang=${lang}`;

    const response = await fetch(url, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
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
