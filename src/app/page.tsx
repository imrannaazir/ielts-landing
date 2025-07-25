import { fetchIELTSCourse } from "@/actions";
import Container from "@/components/layout/container";
import { ApiResponse, InstructorValue } from "@/types";
import { Metadata } from "next";
import CourseInstructor from "./components/course-instructor";
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
const instructor = courseData.data.sections.find((item)=>item.type === 'instructors')
  return (
    <main>
      <Hero
        title={courseData.data.title}
        description={courseData.data.description}
      />
      <Container className=" w-full flex justify-between gap-4 md:gap-12">
        <section className="w-full">
          <CourseInstructor  instructor={instructor!}/>
        </section>
        <TrailerAndCTA
          media={courseData.data.media}
          checklist={courseData.data.checklist}
          ctaText={courseData.data.cta_text.name}
        />
      </Container>
      <div className="min-h-screen"></div>

      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </main>
  );
}
