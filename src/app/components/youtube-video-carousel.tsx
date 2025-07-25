
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-mobile";
import { Media } from "@/types";
import { FC } from "react";
type YoutubeVideoCarouselProps = {
  mediaData: Media[];
};
const YoutubeVideoCarousel: FC<YoutubeVideoCarouselProps> = ({ mediaData }) => {

 const [selectedIndex, setSelectedIndex] = useState(0);
 const [isPlaying, setIsPlaying] = useState(false);
 const isMobile = useMediaQuery("(max-width: 640px)");

 const selectedItem = mediaData[selectedIndex];

 const handleThumbnailClick = (index: number) => {
   setSelectedIndex(index);
   setIsPlaying(false);
 };

 const handlePlay = () => {
   if (selectedItem.resource_type === "video") {
     setIsPlaying(true);
   }
 };

 // Reset playing state when selected index changes
 useEffect(() => {
   setIsPlaying(false);
 }, [selectedIndex]);

 const getImageSrc = (item:Media) => {
   if (item.resource_type === "image") {
     return item.resource_value;
   }
   return (
     item.thumbnail_url ||
     `/placeholder.svg?height=360&width=640&text=Video+Thumbnail`
   );
 };

 const getYouTubeEmbedUrl = (videoId: string) => {
   return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
 };

  return (
    <div className="w-full  space-y-3">
      {/* Main Video/Image Display */}
      <Card className="relative overflow-hidden p-0 shadow-none aspect-video ">
        <div className="relative w-full h-full">
          {isPlaying && selectedItem.resource_type === "video" ? (
            <iframe
              src={getYouTubeEmbedUrl(selectedItem.resource_value)}
              className="w-full h-full"
              allowFullScreen
            />
          ) : (
            <>
              <Image
                src={getImageSrc(selectedItem) || "/placeholder.svg"}
                alt="Selected media"
                fill
                className="object-cover"
                priority
              />
              {selectedItem.resource_type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16 bg-white/90 hover:bg-white text-black"
                    onClick={handlePlay}
                  >
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </Card>

      {/* Thumbnail Carousel using shadcn/ui Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: isMobile ? 1 : 3,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4 ">
          {mediaData.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "pl-2 md:pl-4",
                isMobile ? "basis-1/3" : "basis-1/5"
              )}
            >
              <button
                onClick={() => handleThumbnailClick(index)}
                className={cn(
                  "relative w-full aspect-video  overflow-hidden border-2 transition-all",
                  selectedIndex === index
                    ? "border-primary rounded-sm"
                    : "border-gray-300 hover:border-gray-400"
                )}
              >
                <Image
                  src={getImageSrc(item) || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {item.resource_type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play
                      className="w-3 h-3 text-white drop-shadow-lg"
                      fill="currentColor"
                    />
                  </div>
                )}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between mt-2 gap-2 ">
          <CarouselPrevious className="static translate-y-0 h-8 w-8" />
          <CarouselNext className="static translate-y-0 h-8 w-8" />
        </div>
      </Carousel>
    </div>
  );
};

export default YoutubeVideoCarousel;
