import React from "react";

const TechnicalQuote = ({ quote, section, context, fonts }) => {
  return (
    <div className="w-[700px]">
      <div className={`${fonts.mono} border-l-4 border-black pl-6 py-4`}>
        <div className="flex items-baseline justify-between mb-4 text-xs text-gray-600">
          <div className="text-5xl leading-none font-bold opacity-25 select-none -ml-4">
            "
          </div>
          <div className="uppercase tracking-wider">{context}</div>
        </div>

        <div className={`text-3xl leading-[1.15] mb-8 ${fonts.display}`}>
          {quote}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-black"></div>
          <div className="w-6 h-6 border-2 border-black flex items-center justify-center text-sm">
            ©
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalQuote;
