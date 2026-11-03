import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/random", (c) => c.json({ value: Math.floor(Math.random() * 100) + 1 }));

export default app;
