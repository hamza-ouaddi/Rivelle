import React from "react";

function LabeledInput({ label, ...props }) {
  return (
    <div className="font-clashGrotesk">
      <label className="block text-base tracking-wide">{label}</label>
      <input
        {...props}
        className="w-full bg-white-2 h-12 px-4 border border-light-gray-3 focus:outline-gray rounded-xl"
      />
    </div>
  );
}

export default LabeledInput;
