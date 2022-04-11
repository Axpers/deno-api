import { User } from "../models/user.ts";

const users: User[] = [
  {
    id: 1,
    username: "Robin Wieruch",
  },
  {
    id: 2,
    username: "Dave Davids",
  },
];

function getUsers() {
  return users;
}

function addUser(user: User) {
  users.push(user);
}

export { getUsers, addUser };
