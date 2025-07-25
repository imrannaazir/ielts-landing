import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const Navbar = () => {
  return (
    <nav className="sticky top-0 border-b z-50 w-full bg-background">
      <Container className="max-w-[1440px] py-3 px-7 flex items-center justify-between">
        {/* first */}
        <div>
          {/* logo */}
          <Link href={"/"}>
            <Image src={"/svgs/logo.svg"} width={100} height={27} alt="10ms" />
          </Link>
        </div>

        {/* middle */}
        <div>middle</div>

        {/* last nav */}
        <div>end</div>
      </Container>
    </nav>
  );
};

export default Navbar;
