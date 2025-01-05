import React from 'react'

const OrnateBlock = ({
  title,
  subtitle,
  content,
  fonts
}) => {
  return (
    <div className="relative p-12">
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-black" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-black" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-black" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-black" />
      
      {/* Decorative Center Line */}
      <div className="absolute top-1/2 left-0 w-full border-t border-gray-300" />
      
      {/* Content */}
      <div className="relative text-center">
        <div className={`text-xs uppercase tracking-[0.3em] text-gray-600 mb-4 ${fonts.display}`}>
          {subtitle}
        </div>
        <h1 className={`text-4xl mb-8 leading-tight ${fonts.body}`}>
          {title.split(' ').map((word, i) => (
            <span key={i} className="inline-block mx-1">{word}</span>
          ))}
        </h1>
        <div className={`max-w-2xl mx-auto ${fonts.body}`}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default OrnateBlock 