import { Users } from "./../classes/users";
//import { Users } from "./../config/users.json";

let users=new Users();
users.loadFromJsonFile("./config/users.json");

users.getAny();

console.log(users);
const v=users.users[0].api.getVersion();
console.log(v + "= version");