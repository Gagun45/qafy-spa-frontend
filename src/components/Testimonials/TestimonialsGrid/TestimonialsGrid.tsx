import type { Review } from "@/lib/types";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

interface Props {
  reviews: Review[];
}

const TestimonialsGrid = ({ reviews }: Props) => {
  return (
    <div className="max-w-6xl flex flex-col gap-6">
      {reviews.map((review, index) => (
        <TestimonialCard key={review.name} review={review} index={index}/>
      ))}
    </div>
  );
};
export default TestimonialsGrid;
