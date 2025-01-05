import React, { useState } from 'react'
import SplitHeader from './components/SplitHeader'
import TechnicalHeader from './components/TechnicalHeader'
import FormalHeader from './components/FormalHeader'
import BrutalistHeader from './components/BrutalistHeader'
import FontControls from './components/FontControls'
import TerminalBlock from './components/TerminalBlock'
import ClassifiedBlock from './components/ClassifiedBlock'
import OrnateBlock from './components/OrnateBlock'
import IlluminatedBlock from './components/IlluminatedBlock'
import SigilBlock from './components/SigilBlock'
import AuthorBio from './components/AuthorBio'
import TocEntry from './components/TocEntry'

const fontOptions = {
  sans: [
    { name: 'Dela Gothic One', class: 'font-dela' },
    { name: 'PP Neue Montreal', class: 'font-ppneue' },
    { name: 'Unbounded', class: 'font-unbounded' },
    { name: 'Syncopate', class: 'font-syncopate' },
    { name: 'Chakra Petch', class: 'font-chakra' },
    { name: 'Orbitron', class: 'font-orbitron' },
  ],
  serif: [
    { name: 'Cormorant', class: 'font-cormorant' },
    { name: 'Instrument Serif', class: 'font-instrument' },
    { name: 'Crimson Pro', class: 'font-crimson' },
    { name: 'Spectral', class: 'font-spectral' },
    { name: 'Newsreader', class: 'font-newsreader' },
    { name: 'Bitter', class: 'font-bitter' },
  ],
  mono: [
    { name: 'Fira Code', class: 'font-fira' },
    { name: 'Red Hat Mono', class: 'font-redhat' },
    { name: 'Space Mono', class: 'font-spacemono' },
    { name: 'Share Tech Mono', class: 'font-sharetech' },
    { name: 'DM Mono', class: 'font-dmmono' },
    { name: 'Anonymous Pro', class: 'font-anonymous' },
  ],
}

function App() {
  const [currentFonts, setCurrentFonts] = useState({
    display: 'font-dela',
    body: 'font-cormorant',
    mono: 'font-fira'
  })

  return (
    <div className="min-h-screen">
      <FontControls currentFonts={currentFonts} setCurrentFonts={setCurrentFonts} />

      {/* Navigation */}
      <nav className="fixed top-0 right-0 bg-white p-4 border-l border-b border-black">
        <ul className="space-y-2 text-sm">
          <li><a href="#split" className="hover:text-gray-600">Split Header</a></li>
          <li><a href="#technical" className="hover:text-gray-600">Technical</a></li>
          <li><a href="#formal" className="hover:text-gray-600">Formal</a></li>
          <li><a href="#brutalist" className="hover:text-gray-600">Brutalist</a></li>
          <li><a href="#terminal" className="hover:text-gray-600">Terminal</a></li>
          <li><a href="#classified" className="hover:text-gray-600">Classified</a></li>
          <li><a href="#ornate" className="hover:text-gray-600">Ornate</a></li>
          <li><a href="#illuminated" className="hover:text-gray-600">Illuminated</a></li>
          <li><a href="#sigil" className="hover:text-gray-600">Sigil</a></li>
          <li><a href="#author" className="hover:text-gray-600">Author</a></li>
          <li><a href="#toc" className="hover:text-gray-600">TOC</a></li>
        </ul>
      </nav>

      {/* Split Header */}
      <section id="split" className="min-h-screen flex items-center justify-center p-8 pl-72 border-b border-gray-200">
        <div className="w-[800px]">
          <SplitHeader 
            department="Memetics"
            title="On the Nature of Ideas in Digital Space"
            subtitle="Entrepreneurship"
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* Technical Header */}
      <section id="technical" className="min-h-screen flex items-center justify-center p-8 border-b border-gray-200">
        <div className="w-[800px]">
          <TechnicalHeader 
            department="Network Analysis"
            title="Statistical Review of Cross-Domain Information Flow"
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* Formal Header */}
      <section id="formal" className="min-h-screen flex items-center justify-center p-8 border-b border-gray-200">
        <div className="w-[800px]">
          <FormalHeader 
            department="Cognitive Security"
            officeOf="Technical Assessment"
            title="Quarterly Assessment of Narrative Threats"
            author="J. Chen"
            subtitle="Implications for Cross-Network Information Flow"
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* Brutalist Header */}
      <section id="brutalist" className="min-h-screen flex items-center justify-center p-8">
        <div className="w-[800px]">
          <BrutalistHeader 
            department="Foreign Relations"
            title="Diplomatic Protocol for Inter-Network Communication"
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* Terminal Block Section */}
      <section id="terminal" className="min-h-screen flex items-center justify-center p-8 pl-72 border-b border-gray-200">
        <div className="w-[800px]">
          <TerminalBlock
            content={`> initiating memetic scan
analyzing thought patterns
deploying countermeasures
...
scan complete`}
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* Classified Block Section */}
      <section id="classified" className="min-h-screen flex items-center justify-center p-8 pl-72 border-b border-gray-200">
        <div className="w-[800px]">
          <ClassifiedBlock
            title="Operation Mindforge"
            content={
              <div>
                <p>The primary objective of this operation is to [REDACTED] through the use of advanced cognitive technologies.</p>
                <p>Key targets include [REDACTED] and associated network nodes.</p>
              </div>
            }
            redactions={[
              { top: "0", left: "45%", width: "40%" },
              { top: "48px", left: "20%", width: "30%" }
            ]}
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* Ornate Block Section */}
      <section id="ornate" className="min-h-screen flex items-center justify-center p-8 pl-72 border-b border-gray-200">
        <div className="w-[800px]">
          <OrnateBlock
            title="The Biocosmist Manifesto"
            subtitle="Volume III of the Network State Papers"
            content="In the dawn of our digital age, we find ourselves at the crossroads of consciousness and code..."
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* Illuminated Block Section */}
      <section id="illuminated" className="min-h-screen flex items-center justify-center p-8 pl-72">
        <div className="w-[800px]">
          <IlluminatedBlock
            title="Prayer to Pan Orphic"
            symbol="☉"
            content="In the digital forests of our collective mind, where binary trees grow towards virtual skies, we seek the ancient wisdom coded in our new nature..."
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* Sigil Block Section */}
      <section id="sigil" className="min-h-screen flex items-center justify-center p-8 pl-72 border-b border-gray-200">
        <div className="w-[800px]">
          <SigilBlock
            title="Protocols of Digital Ascension"
            content="Within the hyperstitional framework of our collective consciousness, we encode the sigils of tomorrow's governance..."
            primarySymbol="⚶"
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* Author Bio Section */}
      <section id="author" className="min-h-screen flex items-center justify-center p-8 pl-72 border-b border-gray-200">
        <div className="w-[800px]">
          <AuthorBio
            name="Dr. Sarah Chen"
            role="Director of Cognitive Security"
            bio="Specializing in memetic defense systems and cognitive sovereignty protocols. Former researcher at the Institute for Network States."
            socialHandle="@digitalsov"
            fonts={currentFonts}
          />
        </div>
      </section>

      {/* TOC Section */}
      <section id="toc" className="min-h-screen flex items-center justify-center p-8 pl-72">
        <div className="w-[800px]">
          <div className="space-y-1">
            <TocEntry
              number="01"
              title="Winners and Losers in Post-Capitalism"
              subtitle="A Primer on Marcosian Economics"
              department="ECONOMIC THEORY"
              length="15 min"
              fonts={currentFonts}
            />
            <TocEntry
              number="02"
              title="The Right to Bear Cognitive Arms"
              subtitle="On Memetic Self-Defense in the Digital Age"
              department="SECURITY"
              length="12 min"
              fonts={currentFonts}
            />
            <TocEntry
              number="03"
              title="The 3½ Tenets of Biocosmism"
              subtitle="Ancient Wisdom Renewed"
              department="PHILOSOPHY"
              length="18 min"
              fonts={currentFonts}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App