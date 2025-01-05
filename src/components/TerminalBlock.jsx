import React from 'react'

const TerminalBlock = ({
  path = "~/network-state/cognitive-arms",
  content,
  timestamp = "2025-01-04T21:42:11Z",
  fonts
}) => {
  return (
    <div className={`${fonts.mono} border-2 border-gray-400 p-6 bg-gray-50`}>
      <div className="flex justify-between text-sm mb-4 text-gray-600">
        <div>{">"} {path}</div>
        <div>{timestamp}</div>
      </div>
      <div className="whitespace-pre border-l-2 border-gray-400 pl-4">
        {content.split('\n').map((line, i) => (
          <div key={i} className="text-gray-800">
            {line.startsWith('>') ? line : `$ ${line}`}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TerminalBlock 