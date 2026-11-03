import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/** Toggles light/dark. Starts from the system setting until the user picks one. */
function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const isDark = resolvedTheme === "dark";

	return (
		<Button
			variant="ghost"
			size="icon-lg"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
		>
			{isDark ? <Moon className="size-5" /> : <Sun className="size-5" />}
		</Button>
	);
}

export function TitleBar() {
	return (
		<header className="flex h-14 shrink-0 items-center justify-between border-b px-4">
			<span className="text-lg font-semibold">flare-template</span>
			<ThemeToggle />
		</header>
	);
}
