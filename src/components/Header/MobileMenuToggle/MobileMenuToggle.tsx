import { Menu, X } from "lucide-react";

interface Props {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuToggle = ({ menuOpen, toggleMenu }: Props) => {
  return (
    <button onClick={toggleMenu} className="lg:hidden cursor-pointer">
      {menuOpen ? <X size={26} /> : <Menu size={26} />}
    </button>
  );
};
export default MobileMenuToggle;
