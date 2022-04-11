import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { getUsers } from "../services/userService.ts";

const userRouter = new Router();

userRouter.get("/", (ctx) => {
  ctx.response.body = "Ok";
});
userRouter.get("/users", getUsers);

export default userRouter;
