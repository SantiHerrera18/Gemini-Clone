import main from "../config/gemini.mjs";
import { AIContext } from "./AIContext";

export function AIProvider({ children }) {
  const requestAI = async (text) => {
    return await main(text);
  };

  return (
    <AIContext.Provider value={{ requestAI }}>{children}</AIContext.Provider>
  );
}
