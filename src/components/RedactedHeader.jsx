import React from "react";

const RedactedHeader = ({
  department,
  title,
  clearance = "TOP SECRET // NOETIC-7",
  fonts,
}) => {
  return (
    <div className="w-[650px]">
      {/* Top Classification Bar */}
      <div
        className={`flex items-center justify-between mb-8 ${fonts.mono} text-xs`}
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center">
            ©
          </div>
          <div className="font-bold tracking-wider">{clearance}</div>
        </div>
        <div className="text-gray-600">
          DOC://{Math.random().toString(36).substring(2, 8).toUpperCase()}
        </div>
      </div>

      {/* Main Content */}
      <div className="border-y-2 border-black py-8">
        {/* Department with redaction bars */}
        <div className="relative mb-8">
          <div className={`text-sm uppercase tracking-wider ${fonts.mono}`}>
            {department}
          </div>
          <div className="absolute top-[140%] left-[20%] h-3 w-[30%] bg-black"></div>
          <div className="absolute top-[140%] left-[60%] h-3 w-[15%] bg-black"></div>
        </div>

        {/* Title */}
        <div
          className={`text-4xl font-bold leading-tight mb-8 ${fonts.display}`}
        >
          {title}
        </div>

        {/* Bottom metadata */}
        <div className="flex items-baseline justify-between text-sm">
          <div className={`${fonts.mono} text-gray-600`}>EYES ONLY</div>
        </div>
      </div>

      {/* Bottom Classification Bar */}
      <div className="flex justify-between mt-2">
        <div className="h-2 w-[30%] bg-black"></div>
        <div className="h-2 w-[30%] bg-black"></div>
      </div>
    </div>
  );
};

export default RedactedHeader;
