import { Application } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import userRouter from "./controllers/userController.ts";

const PORT = 8000;
const HOST = "localhost";

const app = new Application();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

const HOST_PORT = `${HOST}:${PORT}`;

console.log(`Listen on ${HOST_PORT}`);

app.listen(HOST_PORT);
