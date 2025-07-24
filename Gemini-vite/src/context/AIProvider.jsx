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

  const typingAnimation = (nextWord, index) => {
    setTimeout(() => {
      console.log(nextWord);

      setResultData((prev) => prev + nextWord + " ");
    }, 70 * index);
  };

  const requestAI = async () => {
    setResultData("");
    setRecentPrompt(input);
    setLoading(true);
    setShowResult(true);
    setInput("");
    const response = await main(input);

    //* Using this loop to catch the bold words on the response
    let responseArray = response.split("**");
    let boldedResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0 || i === 0) boldedResponse += responseArray[i];
      else boldedResponse += "<b>" + responseArray[i] + "</b>";
    }

    //* Using this for getting the break lines
    let spacedResponse = boldedResponse.split("*").join("</br>");

    //*Using this to get the typing animation
    let spacedResponseArray = spacedResponse.split(" ");

    for (let i = 0; i < spacedResponseArray.length; i++) {
      typingAnimation(spacedResponseArray[i], i);
    }

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
