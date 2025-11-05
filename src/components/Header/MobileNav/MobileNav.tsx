import SmoothLink from "@/components/SmoothLink/SmoothLink";
import { buttonVariants } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  closeMenu: () => void;
}

const MobileNav = ({ closeMenu }: Props) => {
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="lg:hidden bg-muted border-t border-b border-foreground backdrop-blur-md px-6 absolute top-24 w-full -z-10!"
      >
        <ul className="flex flex-col space-y-4 tracking-wider py-4 items-center">
          {LINKS.map((link) => (
            <li key={link.href}>
              <SmoothLink onClick={closeMenu} spy={false} to={link.href}>
                {link.label}
              </SmoothLink>
            </li>
          ))}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};
export default MobileNav;
