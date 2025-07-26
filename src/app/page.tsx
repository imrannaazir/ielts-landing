import { fetchIELTSCourse } from "@/actions";
import Container from "@/components/layout/container";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import CourseInstructor from "./components/course-instructor";
import FeatureExplanations from "./components/feature-explanations";
import Hero from "./components/hero";
import HowCourseLaidOut from "./components/how-course-laid-out";
import TrailerAndCTA from "./components/trailer-cta";
import WhatWillLearn from "./components/what-will-learn";
import CourseDetails from "./components/course-details";
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
  const instructor = courseData.data.sections.find(
    (item) => item.type === "instructors"
  );
  const featuresData = courseData.data.sections.find(
    (item) => item.type === "features"
  );
  const pointData = courseData.data.sections.find(
    (item) => item.type === "pointers"
  );
  const featureExplanations = courseData.data.sections.find(
    (item) => item.type === "feature_explanations"
  );
  const detailsData = courseData.data.sections.find((item)=>item.type==='about')
  return (
    <main>
      <Hero
        title={courseData.data.title}
        description={courseData.data.description}
      />
      <Container className=" w-full flex justify-between gap-4 md:gap-12">
        <section className="w-full">
          <CourseInstructor instructor={instructor!} />
          <HowCourseLaidOut features={featuresData!} />
          <WhatWillLearn section={pointData!} />
          <FeatureExplanations section={featureExplanations!} />
          <CourseDetails section={detailsData!}/>
        </section>
        <TrailerAndCTA
          media={courseData.data.media}
          checklist={courseData.data.checklist}
          ctaText={courseData.data.cta_text.name}
        />
      </Container>
    </main>
  );
}
