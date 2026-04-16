import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ReviewCard from "./ReviewCard";
import { reviewsData } from "../../../lib/constants/data";
import ReviewForm from "./ReviewForm";

function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviewsData : reviewsData.slice(0, 3);

  return (
    <section className="flex flex-col lg:flex-row justify- gap-28 mt-36 w-full">
      <div className="flex flex-col justify-center w-full lg:w-1/2">
        <div className="flex justify-between py-2.5 border-b border-gray">
          <h3 className="font-clashDisplay font-medium text-5xl md:text-3xl leading-none">
            Reviews
          </h3>
          <div className="relative">
            <select
              name="sort-reviews"
              id="sort-reviews"
              className="font-clashDisplay text-base text-dark-gray-2 px-4 py-2 border-2 border-light-gray-1 rounded-lg outline-none cursor-pointer appearance-none"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
            <FiChevronDown className="absolute top-1/2 -translate-y-1/2 right-4 text-dark-gray-2 pointer-events-none" />
          </div>
        </div>

        <div>
          {visibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {reviewsData.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-clashGrotesk text-xl text-dark-gray-2 underline underline-offset-4 mt-6 mx-auto"
          >
            {showAll ? "View less reviews" : "View all reviews"}
          </button>
        )}
      </div>
      <div className="w-full lg:w-1/2">
        <h3 className="font-clashDisplay font-medium text-5xl md:text-3xl leading-none py-[14px] border-b border-gray">
          Write a review
        </h3>
        <ReviewForm />
      </div>
    </section>
  );
}

export default ReviewsSection;
