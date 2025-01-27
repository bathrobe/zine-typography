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
      {/* Logo Group */}
      <div className="mb-8">
        <div className={`text-5xl mb-1 ${fonts.body}`}>©</div>
        <div className={`text-xs tracking-widest uppercase ${fonts.display}`}>
          Concept Country
        </div>
      </div>

      {/* Title Group */}
      <div className="mb-8">
        <div
          className={`text-sm text-gray-500 uppercase tracking-wide mb-1 ${fonts.display}`}
        >
          From the Office of {officeOf}
        </div>
        <div
          className={`text-2xl font-bold uppercase tracking-wide ${fonts.display}`}
        >
          {department}
        </div>
      </div>

      {/* Author Group */}
      <div>
        <h1 className={`text-xl mb-1 ${fonts.body}`}>{title}</h1>
        <div className={`text-sm text-gray-600 ${fonts.mono}`}>by {author}</div>
      </div>
    </div>
  );
};

export default FormalHeader;
