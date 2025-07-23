import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AIProvider } from "./context/AIProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AIProvider>
    <App />
  </AIProvider>
);
