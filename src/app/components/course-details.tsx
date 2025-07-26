import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AboutValue, Section } from "@/types";
import { FC } from "react";
interface CourseDetailsProps {
  section: Section;
}
const CourseDetails: FC<CourseDetailsProps> = ({ section }) => {
  console.log(section);
  return (
    <section className="space-y-3 mt-10">
      <h2 className="text-xl font-semibold">{section.name}</h2>
      <Card className="py-0">
        <CardContent >
          <Accordion
            type="single"
            collapsible
            className="w-full "
            defaultValue={section.values[0].id}
          >
            {section.values.map((item: AboutValue) => (
              <AccordionItem key={item.id} value={item.id} >
                <AccordionTrigger className="text-lg font-medium">
                  <div dangerouslySetInnerHTML={{ __html: item.title }} />
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default CourseDetails;
