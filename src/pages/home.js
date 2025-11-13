import { useState } from "react";
import gitgif from "../assets/git.gif";  // add later!

export default function Home() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState(""); 
  const [showTooltip, setShowTooltip] = useState(false);

  const startReading = () => {
    if (!url.trim()) return;

    setStatus("reading");

    // Fake API delay – replace with real backend
    setTimeout(() => {
      setStatus("done");
    }, 2000);
  };

  const downloadFile = (type) => {
    setStatus("download");

    setTimeout(() => {
      setStatus("downloaded");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10">

      {/* TOP LEFT QUESTION MARK */}
      <div 
        className="absolute top-6 left-6 text-xl w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        ?
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-16 left-6 bg-white border rounded-xl shadow-md p-4 w-64 text-sm">
          <p>How to use:</p>
          <p>1. Paste your git repository</p>
          <p>2. Click Enter</p>
          <p>3. Download PDF or Word</p>
        </div>
      )}

      {/* TITLE */}
      <h1 className="text-4xl font-bold mt-10 tracking-wide">READ YOUR GIT!</h1>

      {/* INPUT + ENTER */}
      <div className="flex mt-8 w-[500px]">
        <input
          className="w-full border rounded-l-full px-4 py-3 bg-gray-100 outline-none"
          placeholder="paste your git repository URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={startReading}
          className="bg-green-900 text-white font-semibold px-6 rounded-r-full hover:bg-green-800"
        >
          ENTER
        </button>
      </div>

      {/* POPUP STATES */}
      {status === "reading" && (
        <div className="mt-8 bg-white border rounded-xl shadow-lg p-6 w-[350px] text-center">
          {/* Replace this with your GIF later */}
          <div className="w-full flex justify-center mb-2">
            { <img src={gitgif} className="w-20" /> }
          </div>
          <p>reading...</p>
        </div>
      )}

      {status === "done" && (
        <div className="mt-8 bg-white border rounded-xl shadow-lg p-6 w-[350px] text-center">
          <p className="font-medium">Done reading your Git!<br/>Download now</p>
        </div>
      )}

      {status === "download" && (
        <div className="mt-8 bg-white border rounded-xl shadow-lg p-6 w-[350px] text-center">
          <p>Downloading…</p>
        </div>
      )}

      {status === "downloaded" && (
        <div className="mt-8 bg-white border rounded-xl shadow-lg p-6 w-[350px] text-center">
          <p className="font-medium">Download complete!</p>
        </div>
      )}

      {/* DOWNLOAD SECTION */}
      <p className="mt-10">Click and Download </p>

      <div className="flex gap-6 mt-4">
        <button
          onClick={() => downloadFile("word")}
          className="bg-blue-900 text-white px-10 py-3 rounded-lg hover:bg-blue-800"
        >
          WORD
        </button>

        <button
          onClick={() => downloadFile("pdf")}
          className="bg-red-500 text-white px-10 py-3 rounded-lg hover:bg-red-400"
        >
          PDF
        </button>
      </div>
    </div>
  );
}
