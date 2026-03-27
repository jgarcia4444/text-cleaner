'use client';
import { useState } from "react";

import ActionButtons from "./components/ActionButtons";

export default function Home() {
  const [messyText, setMessyText] = useState(""); 
  const [cleanedText, setCleanedText] = useState("");

  const handleCleanText = (newText: string) => {
    setCleanedText(newText);
  }

  return (
    <div className="flex flex-row w-full h-screen items-center justify-between">
      <div className="w-2/5 h-1/2 flex items-center justify-center px-4">
        <textarea onChange={(e) => setMessyText(e.target.value)} className="border-2 border-white rounded w-full h-full text-white font-bold p-2" name="input-text" id="input-text" value={messyText} />
      </div>
      <div className="w-1/5">
        <ActionButtons messyText={messyText} cleanText={handleCleanText} />
      </div>
      <div className="w-2/5 h-1/2 flex items-center justify-center px-4">
        <textarea readOnly className="border-2 border-white rounded w-full h-full p-2" name="output-text" id="output-text" value={cleanedText} />
      </div>
    </div>
  );
}
