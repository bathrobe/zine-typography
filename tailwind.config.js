/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Previous Display Fonts
        'space': ['Space Grotesk', 'sans-serif'],
        'anybody': ['Anybody', 'sans-serif'],
        'cabinet': ['Cabinet Grotesk', 'sans-serif'],

        // New Display Fonts
        'dela': ['"Dela Gothic One"', 'cursive'],
        'unbounded': ['Unbounded', 'cursive'],
        'syncopate': ['Syncopate', 'sans-serif'],
        'chakra': ['"Chakra Petch"', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],

        // Additional Clean Display Fonts
        'inter': ['Inter', 'sans-serif'],
        'dmsans': ['DM Sans', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],

        // Previous Body Fonts
        'fraunces': ['Fraunces', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'source': ['Source Serif Pro', 'serif'],

        // New Body Fonts
        'cormorant': ['Cormorant', 'serif'],
        'instrument': ['"Instrument Serif"', 'serif'],
        'crimson': ['"Crimson Pro"', 'serif'],
        'spectral': ['Spectral', 'serif'],
        'newsreader': ['Newsreader', 'serif'],
        'bitter': ['Bitter', 'serif'],

        // Additional Clean Body Fonts
        'literata': ['Literata', 'serif'],
        'petrona': ['Petrona', 'serif'],

        // Previous Mono Fonts
        'mono': ['JetBrains Mono', 'monospace'],
        'ibm': ['IBM Plex Mono', 'monospace'],

        // New Mono Fonts
        'fira': ['"Fira Code"', 'monospace'],
        'redhat': ['"Red Hat Mono"', 'monospace'],
        'spacemono': ['"Space Mono"', 'monospace'],
        'sharetech': ['"Share Tech Mono"', 'monospace'],
        'dmmono': ['"DM Mono"', 'monospace'],
        'anonymous': ['"Anonymous Pro"', 'monospace'],

        // Additional Clean Mono Fonts
        'inconsolata': ['Inconsolata', 'monospace'],
        'sourcecode': ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}

