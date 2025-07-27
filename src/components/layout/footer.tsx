import Container from "./container";

const Footer = () => {
  const now = Date.now()
  return (
    <footer className="border-t  mt-6">
      <Container className="py-4 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">2015 - {new Date(now).getFullYear()} Copyright © 10 Minute School. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
