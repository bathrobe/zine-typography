import React from "react";

export const fieldsets = {
  manifesto: ["department", "title", "subtitle"],
  redacted: ["department", "title", "clearance"],
  brutalist: ["department", "title"],
  technical: ["department", "title"],
  formal: ["department", "officeOf", "title", "author", "subtitle"],
  split: ["department", "title", "subtitle"],
  brutalistQuote: ["quote", "section", "context"],
  technicalQuote: ["quote", "section", "context"],
  decreeQuote: ["quote", "context"],
  author: ["name", "role", "bio", "socialHandle", "socialPlatform"],
};

const labels = {
  department: "Department",
  title: "Title",
  subtitle: "Subtitle",
  officeOf: "Office Of",
  author: "Author",
  quote: "Quote",
  section: "Section",
  context: "Context Type",
  name: "Name",
  role: "Role",
  bio: "Bio",
  socialHandle: "Social Handle",
  socialPlatform: "Social Platform",
  clearance: "Clearance Level",
};

const MastheadForm = ({ type, values, onChange }) => {
  if (!type || !fieldsets[type]) return null;

  const fields = fieldsets[type];

  const handleChange = (field) => (e) => {
    onChange({ ...values, [field]: e.target.value });
  };

  return (
    <div className="p-4 border border-black">
      <h3 className="text-lg font-bold mb-4 capitalize">
        {type} Masthead Settings
      </h3>
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium mb-1">
              {labels[field]}
            </label>
            <input
              type="text"
              value={values[field] || ""}
              onChange={handleChange(field)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder={`Enter ${labels[field].toLowerCase()}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MastheadForm;
