import { MainRouter } from "./controllers/mainRouter.ts";
import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";

const app = new Application();
const mainRouter: MainRouter = new MainRouter();

app.use(mainRouter.getRouter().routes());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

await app.listen({ port: 8000 });
