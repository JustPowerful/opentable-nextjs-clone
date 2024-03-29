import Stars from "@/components/Stars";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import { Review } from "@prisma/client";
import { FC } from "react";

interface RatingProps {
  reviews: Review[];
}

const Rating: FC<RatingProps> = ({ reviews }) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length > 1 && "s"}
        </p>
      </div>
    </div>
  );
};

export default Rating;
