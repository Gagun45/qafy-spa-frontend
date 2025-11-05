import type { ReactNode } from "react";
import { Link } from "react-scroll";

interface Props {
  children: ReactNode;
  className?: string;
  to: string;
  spy?: boolean;
  onClick?: () => void;
}

const SmoothLink = ({
  children,
  className,
  to,
  spy = true,
  onClick,
}: Props) => {
  return (
    <Link
      to={to}
      spy={spy}
      smooth={true}
      offset={-96}
      duration={500}
      onClick={onClick}
      activeClass="text-primary"
      className={`${className} cursor-pointer underline-offset-2`}
    >
      {children}
    </Link>
  );
};
export default SmoothLink;
