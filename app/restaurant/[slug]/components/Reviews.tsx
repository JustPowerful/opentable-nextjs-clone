import { Review } from "@prisma/client";
import { FC } from "react";
import ReviewCard from "./ReviewCard";

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        What {reviews.length} {reviews.length > 1 ? "people are" : "person is"}{" "}
        saying
      </h1>
      <div>
        {/* REVIEW CARD */}
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
        {/* REVIEW CARD */}
      </div>
    </div>
  );
};

export default Reviews;
