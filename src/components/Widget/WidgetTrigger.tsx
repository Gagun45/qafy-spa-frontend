import { Button, type buttonVariants } from "../ui/button";
import type { VariantProps } from "class-variance-authority";

interface Props {
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
}

const WidgetTrigger = ({ className, variant }: Props) => {
  const triggerWidget = () => {
    const wrapper = document.querySelector(
      ".gcw_show_modal"
    ) as HTMLElement | null;
    if (wrapper) {
      wrapper.click();
    }
  };
  return (
    <Button onClick={triggerWidget} className={className} variant={variant}>
      Check repair status
    </Button>
  );
};
export default WidgetTrigger;
