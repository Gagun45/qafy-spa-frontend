import type { ReactNode } from "react";
import { Link } from "react-scroll";

interface Props {
  children: ReactNode;
  className?: string;
  to: string;
}

const SmoothLink = ({ children, className, to }: Props) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      activeClass="text-primary"
      className={`${className} cursor-pointer hover:underline underline-offset-2`}
    >
      {children}
    </Link>
  );
};
export default SmoothLink;
