import React from "react";

const RedactedHeader = ({
  department,
  title,
  date = new Date().toLocaleDateString(),
  fonts,
}) => {
  return (
    <div className="relative border-2 border-black p-6">
      <div className="max-w-2xl">
        <div className={`flex items-center gap-4 mb-6`}>
          <div className={`text-sm ${fonts.mono}`}>
            REF: {Math.random().toString(36).substring(2, 8).toUpperCase()}
          </div>
          <div className="flex-1 h-[1px] bg-black"></div>
          <div className={`text-sm ${fonts.mono}`}>{date}</div>
        </div>

        <div className={`text-4xl font-bold mb-6 ${fonts.display}`}>
          {title}
        </div>

        <div className={`text-lg ${fonts.body}`}>{department}</div>

        {/* Decorative redaction bars */}
        <div className="mt-8 space-y-2">
          <div className="h-4 bg-black w-3/4"></div>
          <div className="h-4 bg-black w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default RedactedHeader;
