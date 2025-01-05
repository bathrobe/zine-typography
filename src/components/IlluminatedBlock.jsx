import React from 'react'

const IlluminatedBlock = ({
  title,
  symbol = "☉",
  content,
  fonts
}) => {
  return (
    <div className="relative p-16 border-double border-4 border-black">
      {/* Ornamental Header */}
      <div className="text-center mb-12">
        <div className="text-4xl mb-6">{symbol}</div>
        <div className="flex items-center justify-center">
          <div className="border-t border-black w-16" />
          <h1 className={`text-3xl mx-6 uppercase tracking-widest ${fonts.display}`}>
            {title}
          </h1>
          <div className="border-t border-black w-16" />
        </div>
      </div>
      
      {/* Decorative Dividers */}
      <div className="flex justify-center mb-8">
        <div className="text-2xl">✧ ━━━ ✧ ━━━ ✧</div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <div className={`first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 ${fonts.body}`}>
          {content}
        </div>
      </div>
      
      {/* Footer Ornament */}
      <div className="flex justify-center mt-8">
        <div className="text-2xl">✧ ━━━ ✧ ━━━ ✧</div>
      </div>
    </div>
  )
}

export default IlluminatedBlock 