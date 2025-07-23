/* eslint-disable no-unused-vars */
import { useState } from "react";
import main from "../config/gemini.mjs";
import { AIContext } from "./AIContext";

export function AIProvider({ children }) {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPromts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const requestAI = async () => {
    setResultData("");
    setRecentPrompt(input);
    setLoading(true);
    setShowResult(true);
    const response = await main(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    requestAI,
    prevPromts,
    setPrevPrompts,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <AIContext.Provider value={contextValue}>{children}</AIContext.Provider>
  );
}
