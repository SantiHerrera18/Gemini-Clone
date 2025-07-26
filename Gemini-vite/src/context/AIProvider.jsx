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
      setResultData((prev) => prev + nextWord + " ");
    }, 30 * index);
  };

  const requestAI = async (prompt) => {
    setInput("");
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let response;
    if (prompt) {
      setRecentPrompt(prompt);
      response = await main(prompt);
    } else {
      //* Using this to add prompts to recents section

      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await main(input);
    }

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
    spacedResponseArray.forEach((word, i) => typingAnimation(word, i));

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
