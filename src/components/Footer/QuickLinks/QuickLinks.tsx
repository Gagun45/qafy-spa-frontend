import SmoothLink from "@/components/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";

const QuickLinks = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {LINKS.map((link) => (
          <li key={link.href}>
            <SmoothLink
              className="text-muted-foreground underline"
              spy={false}
              to={link.href}
            >
              {link.label}
            </SmoothLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuickLinks;
