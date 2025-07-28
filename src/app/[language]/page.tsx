import { fetchIELTSCourse } from "@/actions";
import Container from "@/components/layout/container";
import { Language } from "@/types";
import { Metadata, ResolvingMetadata } from "next";
import { FC } from "react";
import CourseDetails from "./components/course-details";
import CourseInstructor from "./components/course-instructor";
import FeatureExplanations from "./components/feature-explanations";
import Hero from "./components/hero";
import HowCourseLaidOut from "./components/how-course-laid-out";
import TrailerAndCTA from "./components/trailer-cta";
import WhatWillLearn from "./components/what-will-learn";

const languages = ["bn", "en"];

type CoursePageProps = {
  params: Promise<{ language: Language }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ language }));
}

export async function generateMetadata(
  { params }: CoursePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const language = (await params).language;
  const courseData = await fetchIELTSCourse(language);
  const seoData = courseData.data.seo;
  const resolvedParentMetadata = await parent;
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.defaultMeta.find((m) => m.value === "og:title")?.content,
      description: seoData.defaultMeta.find((m) => m.value === "og:description")
        ?.content,
      type: // eslint-disable-next-line @typescript-eslint/no-explicit-any
      seoData.defaultMeta.find((m) => m.value === "og:type")?.content as any,
      url: seoData.defaultMeta.find((m) => m.value === "og:url")?.content,
      locale: seoData.defaultMeta.find((m) => m.value === "og:locale")?.content,
      images: [
        {
          url:
            seoData.defaultMeta.find((m) => m.value === "og:image")?.content ||
            "",
          secureUrl: seoData.defaultMeta.find(
            (m) => m.value === "og:image:secure_url"
          )?.content,
          alt: seoData.defaultMeta.find((m) => m.value === "og:image:alt")
            ?.content,
          type: seoData.defaultMeta.find((m) => m.value === "og:image:type")
            ?.content,
        },
        ...(resolvedParentMetadata.openGraph?.images || []),
      ],
    },
  };
}

const CoursePage: FC<CoursePageProps> = async ({ params }) => {
  const language = (await params).language;
  const courseData = await fetchIELTSCourse(language);

  // instructor data
  const instructor = courseData.data.sections.find(
    (item) => item.type === "instructors"
  );

  // feature section data
  const featuresData = courseData.data.sections.find(
    (item) => item.type === "features"
  );

  // pointer section data
  const pointData = courseData.data.sections.find(
    (item) => item.type === "pointers"
  );

  // feature explanation section data
  const featureExplanations = courseData.data.sections.find(
    (item) => item.type === "feature_explanations"
  );

  // details section data
  const detailsData = courseData.data.sections.find(
    (item) => item.type === "about"
  );

  return (
    <main>
      <Hero
        title={courseData.data.title}
        description={courseData.data.description}
        language={language}
        mediaData={courseData.data.media}
      />
      <Container className=" w-full flex flex-col md:flex-row justify-between gap-4 md:gap-12">
        <section className="w-full">
          <CourseInstructor section={instructor!} />
          <HowCourseLaidOut features={featuresData!} />
          <WhatWillLearn section={pointData!} />
          <FeatureExplanations section={featureExplanations!} />
          <CourseDetails section={detailsData!} />
        </section>
        <TrailerAndCTA
          language={language}
          media={courseData.data.media}
          checklist={courseData.data.checklist}
          ctaText={courseData.data.cta_text.name}
        />
      </Container>

      {/* Adding JSON-LD */}
      {courseData.data.seo.schema.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </main>
  );
};
export default CoursePage;
