const fontOptions = {
  sans: [
    { name: 'Space Grotesk', class: 'font-space' },
    { name: 'Anybody', class: 'font-anybody' },
    { name: 'Cabinet Grotesk', class: 'font-cabinet' },
    { name: 'Dela Gothic One', class: 'font-dela' },
    { name: 'Unbounded', class: 'font-unbounded' },
    { name: 'Syncopate', class: 'font-syncopate' },
    { name: 'Chakra Petch', class: 'font-chakra' },
    { name: 'Orbitron', class: 'font-orbitron' },
    { name: 'Inter', class: 'font-inter' },
    { name: 'DM Sans', class: 'font-dmsans' },
    { name: 'Sora', class: 'font-sora' },
    { name: 'Outfit', class: 'font-outfit' },
  ],
  serif: [
    { name: 'Fraunces', class: 'font-fraunces' },
    { name: 'Playfair Display', class: 'font-playfair' },
    { name: 'Source Serif Pro', class: 'font-source' },
    { name: 'Cormorant', class: 'font-cormorant' },
    { name: 'Instrument Serif', class: 'font-instrument' },
    { name: 'Crimson Pro', class: 'font-crimson' },
    { name: 'Spectral', class: 'font-spectral' },
    { name: 'Newsreader', class: 'font-newsreader' },
    { name: 'Bitter', class: 'font-bitter' },
    { name: 'Literata', class: 'font-literata' },
    { name: 'Petrona', class: 'font-petrona' },
  ],
  mono: [
    { name: 'JetBrains Mono', class: 'font-mono' },
    { name: 'IBM Plex Mono', class: 'font-ibm' },
    { name: 'Fira Code', class: 'font-fira' },
    { name: 'Red Hat Mono', class: 'font-redhat' },
    { name: 'Space Mono', class: 'font-spacemono' },
    { name: 'Share Tech Mono', class: 'font-sharetech' },
    { name: 'DM Mono', class: 'font-dmmono' },
    { name: 'Anonymous Pro', class: 'font-anonymous' },
    { name: 'Inconsolata', class: 'font-inconsolata' },
    { name: 'Source Code Pro', class: 'font-sourcecode' },
  ],
}

const FontControls = ({ currentFonts, setCurrentFonts }) => {
  return (
    <div className="fixed top-0 left-0 p-4 bg-white border-r border-b border-black w-64">
      <h2 className="text-sm font-bold mb-4">Font Controls</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-xs uppercase tracking-wide text-gray-600">Display</label>
          <select 
            className="w-full mt-1 text-sm p-1 border border-gray-300"
            value={currentFonts.display}
            onChange={(e) => setCurrentFonts(prev => ({...prev, display: e.target.value}))}
          >
            {fontOptions.sans.map(font => (
              <option key={font.class} value={font.class}>{font.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wide text-gray-600">Body</label>
          <select 
            className="w-full mt-1 text-sm p-1 border border-gray-300"
            value={currentFonts.body}
            onChange={(e) => setCurrentFonts(prev => ({...prev, body: e.target.value}))}
          >
            {fontOptions.serif.map(font => (
              <option key={font.class} value={font.class}>{font.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wide text-gray-600">Mono</label>
          <select 
            className="w-full mt-1 text-sm p-1 border border-gray-300"
            value={currentFonts.mono}
            onChange={(e) => setCurrentFonts(prev => ({...prev, mono: e.target.value}))}
          >
            {fontOptions.mono.map(font => (
              <option key={font.class} value={font.class}>{font.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default FontControls