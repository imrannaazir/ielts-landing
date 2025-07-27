"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChecklistItem, Language, Media } from "@/types";
import { Phone } from "lucide-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import YoutubeVideoCarousel from "./youtube-video-carousel";
interface TrailerAndCTAProps {
  media: Media[];
  checklist: ChecklistItem[];
  ctaText: string;
  language: Language;
}
const TrailerAndCTA: FC<TrailerAndCTAProps> = ({
  media,
  checklist,
  ctaText,
  language,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 325);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full md:max-w-[330px] lg:max-w-[400px] md:-mt-[250px]">
      <div className={cn(isSticky && "md:sticky md:top-[70px]")}>
        <div className="md:border bg-background">
          <div className={cn("hidden md:block p-1 ", isSticky && "md:hidden")}>
            <YoutubeVideoCarousel mediaData={media} />
          </div>
          {/* Price Section */}
          <div className="hidden md:block p-4 ">
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between md:flex-col md:items-start">
                <div className="md:mb-3">
                  <div className="inline-block text-2xl font-semibold">
                    ৳1000
                  </div>
                </div>
              </div>
              <Button
                className="border-b-4 rounded-sm border-[#14773b] hover:bg-[#14773b] text-base py-4"
                size={"lg"}
              >
                {ctaText}
              </Button>
            </div>
          </div>

          {/* Course Features */}
          <div className="hidden md:block p-4">
            <h3 className="text-xl font-semibold">
              {language === "bn"
                ? "এই কোর্সে যা থাকছে"
                : "What this course offers"}
            </h3>
            <ul className="space-y-3 mt-4">
              {checklist?.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={20}
                    height={20}
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <p className="hidden md:flex md:flex-col lg:flex-row justify-between mt-4 text-sm text-center text-gray-400 px-4">
            <span>
              {language === "bn"
                ? "কোর্সটি সম্পর্কে বিস্তারিত জানতে"
                : "To know more about the course"}
            </span>
            <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
              <Phone />
              <span className="ml-1">
                {language === "bn" ? "ফোন করুন" : "Call us"} (16910)
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrailerAndCTA;
