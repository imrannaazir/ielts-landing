"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const ToggleLanguage = () => {
  const pathname = usePathname();
  const btnText = pathname.includes("en") ? "বাং" : "EN";
  const redirect = pathname.includes("en") ? "/bn" : "/en";
  return (
    <Link href={redirect}>
      <Button className="rounded px-2" variant={"outline"} size={"sm"}>
        <Image src={"/svgs/lang.svg"} alt="language" width={15} height={14} />
        <span>{btnText}</span>
      </Button>
    </Link>
  );
};

export default ToggleLanguage;
