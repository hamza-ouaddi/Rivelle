import React, { useState } from "react";
import { IoStar } from "react-icons/io5";

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-2">
        <label className="font-clashGrotesk text-xl leading-none">
          Rate this product
        </label>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => {
            const baseValue = index + 1;

            return (
              <IoStar
                key={index}
                onClick={() => setRating(baseValue)}
                onMouseEnter={() => setHoveredRating(baseValue)}
                onMouseLeave={() => setHoveredRating(0)}
                className={` cursor-pointer transition ${
                  baseValue <= (hoveredRating || rating)
                    ? "text-dark-gray-2"
                    : "text-gray"
                }`}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-clashGrotesk text-xl leading-none">
          Your review
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Tell us about your experience with this product..."
          className="font-clashGrotesk text-base h-[250px] bg-transparent placeholder:text-medium-gray-1 py-4 px-5 outline-none resize-none border border-light-gray-3 rounded-2xl"
        />
      </div>
      <button
        type="submit"
        disabled={rating === 0 || comment.trim() === ""}
        className="font-clashGrotesk font-medium self-start bg-dark-gray-2 text-white py-3 px-10 rounded-full transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Write review
      </button>
    </div>
  );
}

export default ReviewForm;
