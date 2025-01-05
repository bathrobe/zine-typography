import React from 'react'

const TechnicalHeader = ({ department, title, date = "04 JAN 2025", fonts }) => {
  return (
    <div className={fonts.mono}>
      <div className="flex items-baseline mb-8">
        <div className="text-sm w-32">REF://</div>
        <div className="text-sm text-gray-600">{date}//{department.toLowerCase().replace(/\s+/g, '_')}</div>
      </div>
      <div className="border-l border-gray-300">
        <div className="flex">
          <div className="w-32 text-sm">DEPT://</div>
          <div className={`text-2xl font-bold ${fonts.display}`}>{department}</div>
        </div>
        <div className="flex mt-4">
          <div className="w-32 text-sm">TITLE://</div>
          <h1 className={`text-xl ${fonts.body}`}>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default TechnicalHeader 