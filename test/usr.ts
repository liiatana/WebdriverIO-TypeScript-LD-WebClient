import { Users } from "./../classes/users";
//import { Users } from "./../config/users.json";

let users=new Users();
users.loadFromJsonFile("./config/users.json");

users.getAny();

console.log(users);