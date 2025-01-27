import React from "react";

const BrutalistQuote = ({ quote, section, context, fonts }) => {
  return (
    <div className="border-4 border-black p-8">
      <div className="flex items-start gap-4">
        <div className="text-4xl font-bold">"</div>
        <div className="flex-1">
          <div className={`text-3xl font-bold mb-6 ${fonts.display}`}>
            {quote}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className={`text-sm ${fonts.mono}`}>{section}</div>
            <div
              className={`text-sm text-right uppercase tracking-wider ${fonts.mono}`}
            >
              {context}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2 mt-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-2 bg-black"></div>
        ))}
      </div>
    </div>
  );
};

export default BrutalistQuote;
