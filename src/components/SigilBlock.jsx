import React from 'react'

const SigilBlock = ({
  title,
  content,
  symbols = ['⚡', '◈', '⚔', '☽', '⚯'],
  primarySymbol = '⚕',
  fonts
}) => {
  return (
    <div className="relative border-2 border-black p-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-2xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {symbols[i % symbols.length]}
          </div>
        ))}
      </div>

      {/* Central Sigil */}
      <div className="relative text-center mb-8">
        <div className="inline-block relative">
          <div className="text-6xl mb-4">{primarySymbol}</div>
          <div className="absolute -inset-4 border border-black rotate-45" />
          <div className="absolute -inset-4 border border-black -rotate-45" />
        </div>
      </div>

      {/* Title with "hand-drawn" underline */}
      <h1 className={`text-3xl text-center mb-8 relative ${fonts.display}`}>
        {title}
        <div className="absolute -bottom-2 left-1/4 right-1/4 h-px bg-black transform -rotate-1" />
        <div className="absolute -bottom-4 left-1/3 right-1/3 h-px bg-black transform rotate-1" />
      </h1>

      {/* Content */}
      <div className="relative max-w-2xl mx-auto">
        <div className={`leading-relaxed ${fonts.body}`}>
          {content}
        </div>
      </div>

      {/* Corner Symbols */}
      <div className="absolute top-4 left-4 text-xl">{symbols[0]}</div>
      <div className="absolute top-4 right-4 text-xl">{symbols[1]}</div>
      <div className="absolute bottom-4 left-4 text-xl">{symbols[2]}</div>
      <div className="absolute bottom-4 right-4 text-xl">{symbols[3]}</div>
    </div>
  )
}

export default SigilBlock 