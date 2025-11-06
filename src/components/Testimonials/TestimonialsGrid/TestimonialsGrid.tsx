import type { Review } from "@/lib/types";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

interface Props {
  reviews: Review[];
}

const TestimonialsGrid = ({ reviews }: Props) => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <TestimonialCard key={review.name} review={review} index={index}/>
      ))}
    </div>
  );
};
export default TestimonialsGrid;
