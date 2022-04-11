import User from "../models/user.ts";

import { Service } from "https://deno.land/x/knight@2.3.0/mod.ts";

export default Service(
  class UserService {
    private users: User[];
    constructor() {
      this.users = [
        {
          id: 1,
          name: "Robin Wieruch",
        },
        {
          id: 2,
          name: "Dave Davids",
        },
      ];
    }

    public getUsers() {
      return this.users;
    }

    public addUser(user: User) {
      this.users.push(user);
    }
  }
);
