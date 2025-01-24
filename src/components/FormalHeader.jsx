import React from "react";

const FormalHeader = ({
  department,
  officeOf,
  title,
  author,
  subtitle,
  date = "04 JAN 2025",
  fonts,
}) => {
  return (
    <div className="text-center">
      <div className={`text-5xl mb-2 ${fonts.body}`}>©</div>
      <div
        className={`text-xs tracking-widest uppercase mb-2 ${fonts.display}`}
      >
        Concept Country
      </div>
      <div
        className={`text-2xl font-bold uppercase tracking-wide mb-3 ${fonts.display}`}
      >
        {department}
      </div>
      <div
        className={`text-sm text-gray-500 uppercase tracking-wide mb-4 ${fonts.display}`}
      >
        From the Office of {officeOf}
      </div>
      <h1 className={`text-xl mb-2 ${fonts.body}`}>{title}</h1>
      <div className={`text-sm text-gray-600 mb-2 ${fonts.mono}`}>
        by {author}
      </div>
    </div>
  );
};

export default FormalHeader;
