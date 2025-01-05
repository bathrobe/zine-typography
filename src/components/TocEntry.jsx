import React from 'react'

const TocEntry = ({
  number = "01",
  title,
  subtitle,
  department,
  length = "12 min",
  fonts
}) => {
  return (
    <div className="group border-t border-gray-200 py-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-baseline space-x-4">
        <div className={`${fonts.mono} text-sm text-gray-400`}>{number}</div>
        <div className="flex-1">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className={`text-xl font-bold group-hover:text-gray-800 ${fonts.display}`}>
              {title}
            </h2>
            <div className={`${fonts.mono} text-sm text-gray-500`}>{length}</div>
          </div>
          <div className={`text-sm text-gray-600 mb-1 ${fonts.body}`}>{subtitle}</div>
          <div className={`text-xs ${fonts.mono} text-gray-500`}>
            FROM THE OFFICE OF {department}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TocEntry 