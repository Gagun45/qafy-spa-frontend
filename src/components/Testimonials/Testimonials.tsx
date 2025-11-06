import type { Review } from "@/lib/types";
import { useEffect, useState } from "react";
import TestimonialsGrid from "./TestimonialsGrid/TestimonialsGrid";
import TestimonialsLinks from "./TestimonialsLinks/TestimonialsLinks";
import TestimonialsHeading from "./TestimonialsHeading/TestimonialsHeading";

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/reviews");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setReviews(data);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (reviews.length === 0) return null;
  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <section id="testimonials" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-6">
        <TestimonialsHeading />
        <TestimonialsGrid reviews={reviews} />
        <TestimonialsLinks />
      </div>
    </section>
  );
}
