import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ListProvider from "./context/ListContext.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ListProvider>
  </StrictMode>
);
