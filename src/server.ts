import { Knight } from "https://deno.land/x/knight/mod.ts";

const app = await Knight.build();

console.log("Server ready on http://localhost:8000");
await app.listen({ port: 8000 });
