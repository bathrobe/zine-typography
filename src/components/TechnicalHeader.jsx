import React from "react";

const TechnicalHeader = ({
  department,
  title,
  date = "04 JAN 2025",
  fonts,
}) => {
  return (
    <div className={fonts.mono}>
      <div className="flex items-baseline mb-8">
        <div className="text-sm w-32">REF://</div>
        <div className="text-sm text-gray-600">
          {date}//{department.toLowerCase().replace(/\s+/g, "_")}
        </div>
      </div>
      <div className="border-l border-gray-300 pl-4">
        <div className="flex items-baseline">
          <div className="w-32 text-sm">DEPT://</div>
          <div className={`text-base tracking-wide ${fonts.display}`}>
            {department}
          </div>
        </div>
        <div className="flex mt-6">
          <div className="w-32 text-sm">TITLE://</div>
          <h1 className={`text-3xl font-bold leading-tight ${fonts.body}`}>
            {title}
          </h1>
        </div>
        <div className="mt-4 ml-32 w-16 h-1 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default TechnicalHeader;
