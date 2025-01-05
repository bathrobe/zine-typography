import React from 'react'
import Seal from './Seal'

const FormalHeader = ({ 
  department,
  officeOf,
  title,
  author,
  subtitle,
  date = "04 JAN 2025",
  fonts
}) => {
  return (
    <div className="border-2 border-black p-12 text-center">
      <Seal />
      <div className={`text-xs tracking-widest uppercase mb-4 ${fonts.display}`}>Network State</div>
      <div className={`text-2xl font-bold uppercase tracking-wide mb-6 ${fonts.display}`}>
        {department}
      </div>
      <div className={`text-sm text-gray-500 uppercase tracking-wide mb-8 ${fonts.display}`}>
        From the Office of {officeOf}
      </div>
      <h1 className={`text-xl mb-3 ${fonts.body}`}>{title}</h1>
      <div className={`text-sm text-gray-600 mb-4 ${fonts.mono}`}>
        by {author} • {date}
      </div>
      {subtitle && (
        <div className={`text-base text-gray-700 ${fonts.body}`}>{subtitle}</div>
      )}
    </div>
  )
}

export default FormalHeader 