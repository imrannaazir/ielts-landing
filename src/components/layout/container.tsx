import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { FC, ReactNode } from "react";
interface ContainerProps {
  className?: ClassValue;
  children: ReactNode;
}
const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <main
      className={cn("px-4 mx-auto w-full h-full max-w-[1200px]", className)}
    >
      {children}
    </main>
  );
};

export default Container;
