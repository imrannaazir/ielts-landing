import { fetchIELTSCourse } from "@/actions";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import Hero from "./components/hero";
import TrailerAndCTA from "./components/trailer-cta";
export const metadata: Metadata = {
  title: "Best IELTS Preparation Course by Munzereen Shahid [2025]",
  description:
    "Take Best IELTS preparation with us, This Course is one of the Best IELTS Course in Bangladesh, which includes mock tests, and a premium study book.",
  keywords: [
    "IELTS Course",
    "IELTS Course in BD",
    "IELTS Preparation",
    "IELTS Bangladesh",
  ],
};

export default async function Home() {
  const courseData: ApiResponse = await fetchIELTSCourse();

  return (
    <main>
      <Hero
        title={courseData.data.title}
        description={courseData.data.description}
      />
      <TrailerAndCTA media={courseData.data.media} />
    <div className="min-h-screen"></div>
    
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    </main>
  );
}
