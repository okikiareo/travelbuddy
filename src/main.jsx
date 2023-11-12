import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles
import "./css/main.css";
// Parent Component
import App from "./App";

const container = document.getElementById("root");
createRoot(container).render(
    <StrictMode>
        <App />
    </StrictMode>
);