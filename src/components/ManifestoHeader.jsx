import React from "react";

const ManifestoHeader = ({
  department,
  title,
  subtitle = "FOR IMMEDIATE DISTRIBUTION",
  date = new Date().toLocaleDateString(),
  fonts,
}) => {
  return (
    <div className="border-l-8 border-black pl-6">
      <div className={`flex items-center gap-4 mb-6`}>
        <div className="w-8 h-8 bg-black flex items-center justify-center text-white">
          ©
        </div>
      </div>

      <div className={`text-5xl font-bold mb-4 leading-tight ${fonts.display}`}>
        {title.toUpperCase()}
      </div>

      <div className="flex items-center gap-4">
        <div className={`text-xl ${fonts.body}`}>{department}</div>
        <div className="flex-1 h-[1px] bg-black"></div>
      </div>

      <div className={`mt-4 text-sm tracking-wider ${fonts.mono}`}>
        {subtitle}
      </div>
    </div>
  );
};

export default ManifestoHeader;
