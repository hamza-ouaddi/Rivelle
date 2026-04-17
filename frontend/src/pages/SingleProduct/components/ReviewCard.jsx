import React from "react";
import { IoStar } from "react-icons/io5";

function ReviewCard({ review }) {
  return (
    <div className="flex gap-10 py-6 border-b border-light-gray-1">
      <img
        src={review.user.profilePicture}
        alt="User Picture"
        className="w-[72px] h-[72px] object-cover object-center rounded-full"
      />
      <div className="space-y-4">
        <div className="flex justify-between w-full">
          <div className="">
            <span className="font-clashGrotesk font-medium text-xl">
              {review.user.name}
            </span>
            <div className="flex gap-0.5">
              {[...Array(review.rating)].map((_, index) => (
                <IoStar key={index} size={16} />
              ))}
            </div>
          </div>
          <time className="font-clashGrotesk text-sm">{review.createdAt}</time>
        </div>

        <p className="font-clashGrotesk text-lg">{review.comment}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
