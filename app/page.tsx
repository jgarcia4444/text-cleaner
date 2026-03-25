'use client';

import { useState } from "react";

export default function Home() {
  const [messyText, setMessyText] = useState(""); 
  const [cleanedText, setCleanedText] = useState("");

  const handleCleanText = (newText: string) => {
    setCleanedText(newText);
  }

  return (
    <div className="flex flex-row w-full h-screen items-center justify-between">
      <div className="w-2/5 h-1/2">
        <textarea name="input-text" id="input-text" value={messyText} />
      </div>
      <div className="w-1/5">
        <ActionButtons messyText={messyText} cleanText={handleCleanText} />
      </div>
      <div className="w-2/5">
        <textarea name="output-text" id="output-text" value={cleanedText} />
      </div>
    </div>
  );
}
