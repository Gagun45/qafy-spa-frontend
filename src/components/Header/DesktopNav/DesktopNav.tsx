import SmoothLink from "@/components/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex space-x-8">
      {LINKS.map((link) => (
        <SmoothLink to={link.href} key={link.href}>
          {link.label}
        </SmoothLink>
      ))}
    </nav>
  );
};
export default DesktopNav;
