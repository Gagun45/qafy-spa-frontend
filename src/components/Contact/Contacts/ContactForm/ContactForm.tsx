import { contactFormSchema, type ContactFormType } from "@/lib/zod-schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import NameInput from "./NameInput/NameInput";
import ContactInput from "./ContactInput/ContactInput";
import MessageTextarea from "./MessageTextarea/MessageTextarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { BACKEND_BASE_URL } from "@/lib/constants";

const ContactForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contact: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = async (values: ContactFormType) => {
    const formData = new FormData();
    const { contact, message, name } = values;
    formData.append("name", name);
    formData.append("contact", contact);
    formData.append("message", message);
    files.forEach((file) => {
      formData.append("files", file);
    });
    const res = await fetch(`${BACKEND_BASE_URL}/api/contact`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <span className="text-lg font-semibold">Contact Form</span>
        <NameInput />
        <ContactInput />
        <MessageTextarea />
        <Label className="flex flex-col gap-1 items-start">
          <span>
            Upload images <i>(optional, up to 5)</i>
          </span>
          <Input
            type="file"
            multiple
            onChange={(e) => {
              if (e.target.files) setFiles(Array.from(e.target.files));
            }}
          />
        </Label>
        <Button>Submit</Button>
      </form>
    </Form>
  );
};
export default ContactForm;
