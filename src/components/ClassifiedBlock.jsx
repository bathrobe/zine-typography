import React from 'react'

const ClassifiedBlock = ({
  title,
  content,
  clearance = "TOP SECRET",
  redactions = [],
  fonts
}) => {
  return (
          <div className="border-4 border-black p-8">
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
            △
          </div>
          <div className={`text-xs ${fonts.mono} bg-black text-white px-2 py-1`}>
            {clearance}
          </div>
        </div>
        <div className={`text-xs ${fonts.mono} text-gray-600`}>
          EYES ONLY
        </div>
      </div>
      <h1 className={`text-2xl mb-6 ${fonts.display}`}>{title}</h1>
      <div className="relative">
        {redactions.map((pos, i) => (
          <div
            key={i}
            className="absolute bg-black z-10"
            style={{
              ...pos,
              height: "1.2em",
              marginTop: "0.2em"
            }}
          />
        ))}
        <div className={`space-y-4 relative ${fonts.body}`}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default ClassifiedBlock 