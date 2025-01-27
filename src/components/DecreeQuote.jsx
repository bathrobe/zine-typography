import React from "react";

const DecreeQuote = ({ quote, context, fonts }) => {
  return (
    <div className="w-[700px] py-8">
      <div className="relative">
        {/* Decorative lines */}
        <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-black"></div>
        <div className="absolute -right-4 top-0 bottom-0 w-[2px] bg-black"></div>

        {/* Main content */}
        <div className="px-8">
          <div
            className={`font-fraunces text-2xl italic leading-relaxed mb-4 text-center`}
          >
            {quote}
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-black"></div>
            <div className={`${fonts.mono} text-xs tracking-[0.2em]`}>
              {context}
            </div>
            <div className="w-12 h-[1px] bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecreeQuote;
