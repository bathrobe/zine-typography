import React from "react";

const AuthorBio = ({
  name,
  role = "Network State Architect",
  bio,
  socialHandle,
  socialPlatform = "x",
  fonts,
}) => {
  return (
    <div className="flex items-start space-x-6 border-l-4 border-black pl-6 py-4">
      {/* Avatar placeholder with institutional feel */}
      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 border-2 border-black relative">
        <img
          src="/portrait.png"
          alt="Author avatar"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="mb-2">
          <h3 className={`text-lg font-bold ${fonts.display}`}>{name}</h3>
          <div className={`text-sm text-gray-600 ${fonts.mono}`}>{role}</div>
        </div>
        <p className={`text-sm mb-2 ${fonts.body}`}>{bio}</p>
        <div className={`${fonts.mono} text-sm text-gray-600`}>
          {socialPlatform}:// {socialHandle}
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
