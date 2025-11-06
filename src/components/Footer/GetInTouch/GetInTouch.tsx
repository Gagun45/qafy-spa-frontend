import { CONTACT_INFO, SOCIALS_LINKS } from "@/lib/constants";

const GetInTouch = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
      <ul className="space-y-4">
        {CONTACT_INFO.map((contact) => (
          <li
            key={contact.label}
            className="flex justify-center hover:underline underline-offset-2 md:justify-start"
          >
            <a
              href={contact.href}
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              <contact.icon className="text-primary" />
              <span>{contact.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex justify-center items-center md:justify-start gap-8 flex-wrap">
        {SOCIALS_LINKS.map((contact) => {
          const iconColor = contact.label.toLowerCase();
          return (
            <li
              key={contact.label}
              className={`cursor-pointer text-${iconColor}`}
            >
              <a href={contact.href} target="_blank">
                <contact.icon className="size-8"/>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default GetInTouch;
