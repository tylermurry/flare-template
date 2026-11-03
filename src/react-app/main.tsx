import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { InstallHint } from "./components/InstallHint.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
		<InstallHint />
	</StrictMode>,
);
