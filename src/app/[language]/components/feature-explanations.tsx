import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FeatureExplanationValue, Section } from "@/types";
import { Check } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
interface FeatureExplanationsProps {
  section: Section;
}
const FeatureExplanations: FC<FeatureExplanationsProps> = ({ section }) => {
  return (
    <section className="space-y-3 mt-10">
      <h2 className="text-xl font-semibold">{section.name}</h2>
      <Card>
        <CardContent className={cn("space-y-5 divide-y ")}>
          {section.values.map((item: FeatureExplanationValue, index) => (
            <div
              key={item.id}
              className={cn(
                "flex  flex-col md:flex-row justify-between gap-3",
                index === 0 && "pb-5"
              )}
            >
              <div className="space-y-2">
                <h3 className="text-sm md:text-base font-medium leading-[30px]">{item.title}</h3>
                <ul className="space-y-2">
                  {item.checklist.map((point, index) => (
                    <li key={index} className="flex gap-5">
                      <div className="">
                        <Check className="text-[#6294F8]" />
                      </div>
                      <span className="text-sm  leading-6 text-[#4B5563] md:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={item.file_url}
                alt={item.title}
                width={250}
                height={250}
                className="w-full md:w-[250px]"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default FeatureExplanations;
