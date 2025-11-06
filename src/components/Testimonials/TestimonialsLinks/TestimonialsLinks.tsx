import { buttonVariants } from "@/components/ui/button";
import { reviewLinkUrl } from "@/lib/constants";

const TestimonialsLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 justify-between">
      <a
        href={reviewLinkUrl}
        target="_blank"
        className={`${buttonVariants({
          variant: "outline",
        })} w-full! sm:max-w-48!`}
      >
        View all
      </a>
      <a
        href={reviewLinkUrl}
        target="_blank"
        className={`${buttonVariants({
          variant: "secondary",
        })} w-full! sm:max-w-48!`}
      >
        Leave a review
      </a>
    </div>
  );
};
export default TestimonialsLinks;
