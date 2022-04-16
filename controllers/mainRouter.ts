import { UsersController } from "./usersController.ts";
import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";

export class MainRouter {
  private mainRouter: Router;
  private usersController: UsersController;

  constructor() {
    this.usersController = new UsersController();

    this.mainRouter = new Router()
      .get("/", (context) => {
        context.response.body = "Health ok !";
      })
      .use(
        "/users",
        this.usersController.getRouter().routes(),
        this.usersController.getRouter().allowedMethods()
      );
  }

  getRouter() {
    return this.mainRouter;
  }
}
