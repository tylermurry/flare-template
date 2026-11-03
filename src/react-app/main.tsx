import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import "./index.css";
import App from "./App.tsx";
import { InstallHint } from "./components/InstallHint.tsx";
import { TitleBar } from "./components/TitleBar.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<div className="flex min-h-svh flex-col">
				<TitleBar />
				<App />
			</div>
			<InstallHint />
		</ThemeProvider>
	</StrictMode>,
);
