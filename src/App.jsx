import React, { useState } from "react";
import SplitHeader from "./components/SplitHeader";
import TechnicalHeader from "./components/TechnicalHeader";
import FormalHeader from "./components/FormalHeader";
import BrutalistHeader from "./components/BrutalistHeader";
import ManifestoHeader from "./components/ManifestoHeader";
import RedactedHeader from "./components/RedactedHeader";
import TerminalBlock from "./components/TerminalBlock";
import ClassifiedBlock from "./components/ClassifiedBlock";
import OrnateBlock from "./components/OrnateBlock";
import IlluminatedBlock from "./components/IlluminatedBlock";
import SigilBlock from "./components/SigilBlock";
import AuthorBio from "./components/AuthorBio";
import TocEntry from "./components/TocEntry";
import BrutalistQuote from "./components/BrutalistQuote";
import TechnicalQuote from "./components/TechnicalQuote";
import DecreeQuote from "./components/DecreeQuote";
import { toPng } from "html-to-image";
import { mastheadContent } from "./data/mastheadContent";
import MastheadForm, { fieldsets } from "./components/MastheadForm";

const mastheadComponents = {
  split: SplitHeader,
  technical: TechnicalHeader,
  formal: FormalHeader,
  brutalist: BrutalistHeader,
  manifesto: ManifestoHeader,
  redacted: RedactedHeader,
  brutalistQuote: BrutalistQuote,
  technicalQuote: TechnicalQuote,
  decreeQuote: DecreeQuote,
  author: AuthorBio,
};

// Hardcoded fonts
const fonts = {
  display: "font-publicsans",
  body: "font-publicsans",
  mono: "font-ibmplex",
};

function App() {
  const [selectedMasthead, setSelectedMasthead] = useState("manifesto");
  const [mastheadValues, setMastheadValues] = useState(
    mastheadContent.manifesto || {}
  );

  const exportHighRes = async () => {
    const element = document.getElementById("masthead-preview");
    if (!element) return;

    const exportButton = element.querySelector(".export-button");
    if (exportButton) {
      exportButton.style.display = "none";
    }

    const scale = 4;
    const options = {
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${element.offsetWidth}px`,
        height: `${element.offsetHeight}px`,
      },
    };

    try {
      // Get the first field based on the selected masthead type
      const firstField = fieldsets[selectedMasthead]?.[0];
      const content = mastheadValues[firstField] || "";
      // Create a filename-safe version of the content (truncate at 30 chars, remove special chars)
      const safeContent = content
        .slice(0, 30)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      const filename = safeContent
        ? `${selectedMasthead}-${safeContent}`
        : selectedMasthead;

      const dataUrl = await toPng(element, options);
      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      if (exportButton) {
        exportButton.style.display = "block";
      }
    }
  };

  const handleMastheadChange = (e) => {
    const type = e.target.value;
    setSelectedMasthead(type);
    setMastheadValues(mastheadContent[type] || {});
  };

  const CurrentMasthead = mastheadComponents[selectedMasthead];

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen">
        {/* Left side: Masthead Preview */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div id="masthead-preview" className="relative w-[800px]">
            <button
              onClick={exportHighRes}
              className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded export-button z-10"
            >
              Export
            </button>
            <div className="flex justify-center">
              {CurrentMasthead && (
                <CurrentMasthead {...mastheadValues} fonts={fonts} />
              )}
            </div>
          </div>
        </div>

        {/* Right side: Controls */}
        <div className="w-80 border-l border-black p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Masthead Type
            </label>
            <select
              value={selectedMasthead}
              onChange={handleMastheadChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {Object.keys(mastheadComponents).map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <MastheadForm
            type={selectedMasthead}
            values={mastheadValues}
            onChange={setMastheadValues}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
