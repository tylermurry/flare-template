import { useState } from "react";
import { Share, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DISMISS_KEY = "install-hint-dismissed";

/** True on iPhone/iPad. iPadOS reports itself as a Mac, so also check for touch. */
function isIOS() {
	const ua = navigator.userAgent;
	return /iPhone|iPad|iPod/.test(ua) || (ua.includes("Macintosh") && navigator.maxTouchPoints > 1);
}

/** True when launched from the home screen rather than a browser tab. */
function isStandalone() {
	return (
		(navigator as Navigator & { standalone?: boolean }).standalone === true ||
		window.matchMedia("(display-mode: standalone)").matches
	);
}

function isDismissed() {
	try {
		return localStorage.getItem(DISMISS_KEY) === "1";
	} catch {
		return false;
	}
}

/**
 * iOS has no API to add a web app to the home screen, so show instructions.
 * Shown on iPhone/iPad until installed or dismissed. `?install-hint` forces it on.
 */
export function InstallHint() {
	const [visible, setVisible] = useState(
		() =>
			new URLSearchParams(location.search).has("install-hint") ||
			(isIOS() && !isStandalone() && !isDismissed()),
	);

	if (!visible) return null;

	function dismiss() {
		setVisible(false);
		try {
			localStorage.setItem(DISMISS_KEY, "1");
		} catch {
			// Storage unavailable (private mode); the hint just shows again next visit.
		}
	}

	return (
		<div
			role="dialog"
			aria-label="Install this app"
			className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 flex items-center gap-3 rounded-2xl border bg-card p-3 text-card-foreground shadow-lg animate-in slide-in-from-bottom-8 fade-in"
		>
			<img src="/icons/icon-192.png" alt="" className="size-11 shrink-0 rounded-xl" />
			<div className="flex-1 text-sm leading-snug">
				<div className="font-semibold">Install this app</div>
				<div className="text-muted-foreground">
					Tap <Share className="inline size-4 align-[-3px] text-primary" /> Share, then{" "}
					<b className="text-foreground">Add to Home Screen</b>.
				</div>
			</div>
			<Button variant="ghost" size="icon" onClick={dismiss} aria-label="Dismiss">
				<X />
			</Button>
		</div>
	);
}
