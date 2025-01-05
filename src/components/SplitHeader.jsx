import React from 'react'

const SplitHeader = ({ department, title, subtitle, date = "04 JAN 2025", fonts }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <div className="border-r-2 border-black pr-8">
          <div className={`text-6xl font-bold tracking-tight ${fonts.display}`}>
            {department.toUpperCase()}
          </div>
        </div>
        <div>
          <div className={`text-sm text-gray-600 mb-6 ${fonts.mono}`}>{date} // INTERNAL</div>
          <h1 className={`text-xl mb-4 ${fonts.body}`}>{title}</h1>
          <div className={`text-sm uppercase tracking-widest text-gray-600 ${fonts.display}`}>
            FROM THE OFFICE OF {subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplitHeader 