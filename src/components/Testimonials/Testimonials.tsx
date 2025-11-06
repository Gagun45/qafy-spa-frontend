import type { Review } from "@/lib/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TestimonialsGrid from "./TestimonialsGrid/TestimonialsGrid";

// const testimonials = [
//   {
//     name: "Olena K.",
//     text: "Super fast and friendly service! My iPhone screen was replaced in under an hour. Highly recommend Qafy Mobile 💙",
//     rating: 5,
//     photo: "/avatars/olena.jpg",
//   },
//   {
//     name: "Andrii M.",
//     text: "Great prices and honest staff. They explained the issue with my laptop clearly and fixed it the same day.",
//     rating: 5,
//     photo: "/avatars/andrii.jpg",
//   },
//   {
//     name: "Sofiia R.",
//     text: "I’ve tried other repair shops before, but this one is on another level. Professional and trustworthy team!",
//     rating: 5,
//     photo: "/avatars/sofiia.jpg",
//   },
// ];

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

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(reviews);
  return (
    <section id="testimonials" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Real feedback from people who trusted us with their devices.
        </motion.p>
      </div>

      {/* Testimonials grid */}
      <TestimonialsGrid reviews={reviews}/>
    </section>
  );
}
