import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { InstructorValue, Section } from "@/types";
import { FC } from "react";
interface CourseInstructorProps {
  section: Section;
}
const CourseInstructor: FC<CourseInstructorProps> = ({ section }) => {
  const instructorValue: InstructorValue = section.values[0];
  return (
    <section className="py-6 w-full space-y-4">
      <h2 className="font-semibold text-2xl">{section.name}</h2>
      <Card className="shadow-none max-w-full w-full pb-0">
        <CardContent className="flex items-center gap-4 text-sm">
          <Avatar className="size-[73px]">
            <AvatarImage
              src={instructorValue.image}
              alt={instructorValue.name}
              width={73}
              height={73}
            />
          </Avatar>
          <div>
            <h3 className="text-xl font-medium">{instructorValue.name}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: instructorValue.description }}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CourseInstructor;
