// src/App.tsx

import { useState } from "react";
import { Dices } from "lucide-react";
import { Button } from "@/components/ui/button";

function App() {
	const [random, setRandom] = useState<number>();

	async function roll() {
		const res = await fetch("/api/random");
		const data = (await res.json()) as { value: number };
		setRandom(data.value);
	}

	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-4 p-8">
			<div className="text-6xl font-bold tabular-nums" aria-live="polite">
				{random ?? "–"}
			</div>
			<Button size="lg" onClick={roll}>
				<Dices /> Get random number
			</Button>
		</div>
	);
}

export default App;
