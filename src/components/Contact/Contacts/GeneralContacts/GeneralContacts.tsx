import { CONTACT_INFO } from "@/lib/constants";
import ContactCard from "../ContactCard/ContactCard";

const GeneralContacts = () => {
  return (
    <ul className="space-y-6">
      {CONTACT_INFO.map((contact) => (
        <ContactCard contact={contact} key={contact.label} />
      ))}
    </ul>
  );
};
export default GeneralContacts;
