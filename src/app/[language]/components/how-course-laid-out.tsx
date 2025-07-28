import { Card, CardContent } from "@/components/ui/card";
import { FeatureValue, Section } from "@/types";
import Image from "next/image";
import { FC } from "react";
interface HowCourseLaidOutProps {
  features: Section;
}
const HowCourseLaidOut: FC<HowCourseLaidOutProps> = ({ features }) => {
  return (
    <main className="space-y-3">
      <h2 className="text-xl font-semibold ">{features.name}</h2>
      <Card className="bg-[#111827]">
        <CardContent className="grid md:grid-cols-2 gap-4 md:gap-8 ">
          {features.values.map((item: FeatureValue) => (
            <div key={item.id} className="flex  gap-3 ">
              <div className="size-9  aspect-square">
                <Image className="w-full h-full"  src={item.icon} alt={item.title} width={36} height={36}/>
              </div>
              <div>
              <h3 className="text-background text-lg font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
};

export default HowCourseLaidOut;
