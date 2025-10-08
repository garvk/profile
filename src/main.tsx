import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Dark mode detection - follows system preference without localStorage
const applyDarkMode = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Apply on load
applyDarkMode();

// Listen for system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDarkMode);

createRoot(document.getElementById("root")!).render(<App />);
