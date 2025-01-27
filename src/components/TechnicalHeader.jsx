import React from "react";

const TechnicalHeader = ({
  department,
  title,
  date = "04 JAN 2025",
  fonts,
}) => {
  return (
    <div className={`${fonts.mono} w-[600px]`}>
      <div className="flex items-baseline gap-4 mb-8 text-xs text-gray-600">
        <div>REF://{date}</div>
        <div className="uppercase tracking-wider">INTERNAL</div>
      </div>

      <div className="border-l-4 border-black pl-6 py-2">
        <div className={`text-sm uppercase tracking-wider mb-6 ${fonts.mono}`}>
          {department}
        </div>

        <div
          className={`text-4xl font-bold leading-tight mb-6 ${fonts.display}`}
        >
          {title}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-6 h-6 border-2 border-black flex items-center justify-center text-sm">
            ©
          </div>
          <div className="w-16 h-[1px] bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalHeader;
