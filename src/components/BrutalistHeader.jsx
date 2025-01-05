import React from 'react'

const BrutalistHeader = ({ department, title, date = "04 JAN 2025", fonts }) => {
  return (
    <div>
      <div className="border-4 border-black p-8 mb-2">
        <div className={`text-sm mb-8 ${fonts.mono}`}>{date}</div>
        <div className={`text-4xl font-bold mb-4 ${fonts.display}`}>
          {department.toUpperCase()}
        </div>
        <h1 className={`text-xl ${fonts.body}`}>{title}</h1>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="h-2 bg-black"></div>
        <div className="h-2 bg-black"></div>
        <div className="h-2 bg-black"></div>
        <div className="h-2 bg-black"></div>
      </div>
    </div>
  )
}

export default BrutalistHeader 