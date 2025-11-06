import GeneralContacts from "./GeneralContacts/GeneralContacts";
import SocialContacts from "./SocialContacts/SocialContacts";

const ContactsContainer = () => {
  return (
    <div className="flex flex-col gap-6">
      <GeneralContacts />
      <SocialContacts />
    </div>
  );
};
export default ContactsContainer;
