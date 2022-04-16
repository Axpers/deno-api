import { UsersService } from "./../services/usersService.ts";
import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";

export class UsersController {
  private usersService: UsersService;
  private usersRouter: Router;

  constructor() {
    this.usersService = new UsersService();
    this.usersRouter = new Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.usersRouter
      .get("/", (ctx) => {
        ctx.response.body = this.usersService.getUsers();
      })
      .get("/:id", (ctx) => {
        ctx.response.body = this.usersService.getUser(Number(ctx.params.id));
      })
      .delete("/:id", (ctx) => {
        this.usersService.deleteUser(Number(ctx.params.id));
        ctx.response.body = null;
      })
      .post("/", async (ctx) => {
        const { value } = ctx.request.body({ type: "json" });
        const user = await value;
        this.usersService.addUser(user);
      });
  }

  getRouter() {
    return this.usersRouter;
  }
}
