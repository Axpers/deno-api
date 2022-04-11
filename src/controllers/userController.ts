import {
  bodyMappingJSON,
  Context,
  Controller,
  created,
  Endpoint,
  IController,
} from "https://deno.land/x/knight@2.3.0/mod.ts";

import User from "../models/user.ts";
import UserService from "../services/userService.ts";

@Controller("/users")
export default class UserController extends IController {
  private userService = UserService.instance();

  @Endpoint("POST", "/add")
  async addUser({ request, response }: Context): Promise<void> {
    const user = await bodyMappingJSON(request, User);

    this.userService.addUser(user);
    created(response, `User ${user.name} was successfully created`);
  }

  // @Endpoint("GET", "/")
  // getUsers({ response }: Context): void {
  //   const users = this.userService.getUsers();
  //   ok(response, users);
  // }
}
