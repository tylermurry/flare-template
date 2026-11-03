// src/App.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";

const logos = [
	{ href: "https://vite.dev", src: viteLogo, alt: "Vite logo" },
	{ href: "https://react.dev", src: reactLogo, alt: "React logo" },
	{ href: "https://hono.dev/", src: honoLogo, alt: "Hono logo" },
	{ href: "https://workers.cloudflare.com/", src: cloudflareLogo, alt: "Cloudflare logo" },
];

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");

	return (
		<div className="mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center gap-8 p-8 text-center">
			<div className="flex flex-wrap justify-center gap-6">
				{logos.map((logo) => (
					<a key={logo.href} href={logo.href} target="_blank">
						<img src={logo.src} alt={logo.alt} className="size-16" />
					</a>
				))}
			</div>
			<h1 className="text-3xl font-bold">Vite + React + Hono + Cloudflare</h1>
			<div className="flex flex-col items-center gap-2">
				<Button onClick={() => setCount((count) => count + 1)} aria-label="increment">
					count is {count}
				</Button>
				<p className="text-sm text-muted-foreground">
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Button
					variant="outline"
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
				>
					Name from API is: {name}
				</Button>
				<p className="text-sm text-muted-foreground">
					Edit <code>worker/index.ts</code> to change the name
				</p>
			</div>
		</div>
	);
}

export default App;
