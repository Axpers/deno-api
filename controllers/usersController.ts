import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";

export class UsersController {
  private usersRouter = new Router()
    .get("/", (ctx) => {
      ctx.response.body = "This returns all users";
    })
    .get("/:id", (ctx) => {
      ctx.response.body = `This returns a user with the id ${ctx.params.id}`;
    });

  getRouter() {
    return this.usersRouter;
  }
}
