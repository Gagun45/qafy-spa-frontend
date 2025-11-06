import { SOCIALS_LINKS } from "@/lib/constants";
import ContactCard from "../ContactCard/ContactCard";

const SocialContacts = () => {
  return (
    <ul className="flex items-end gap-6 flex-wrap">
      {SOCIALS_LINKS.map((contact) => {
        const iconColor = `text-${contact.label.toLowerCase()}`;
        return (
          <ContactCard
            iconColor={iconColor}
            contact={contact}
            key={contact.label}
          />
        );
      })}
    </ul>
  );
};
export default SocialContacts;
