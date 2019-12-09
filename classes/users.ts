import { User } from "./user";
import fs from 'fs';

class Users {
	
	public users: User[];
	
	constructor() {
		this.users= new Array();
    }
	
	public loadFromJsonFile (path:string) {
		let parse = JSON.parse(fs.readFileSync(path, "utf8")); 
		for(var obj in parse) {
  
			let user=new User(parse[obj].login,parse[obj].password);
			this.users.push(user);
			
		}
	}

	public shuffle(){
		var temp:User;
		for (let i = this.users.length - 1; i > 0; i--) {
		  const j = Math.floor(Math.random() * (i + 1));
		  temp = this.users[j];
		  this.users[j] = this.users[i];
		  this.users[i] = temp;
		}
		return this;
	  } 

	  /*public shuffle(){
		let shUsrs=new Users();
    	Object.assign(shUsrs,this)
		var temp:User;
		for (let i = shUsrs.users.length - 1; i > 0; i--) {
		  const j = Math.floor(Math.random() * (i + 1));
		  temp = shUsrs.users[j];
		  this.users[j] = shUsrs.users[i];
		  this.users[i] = temp;
		}
		return shUsrs;
	  } */

	  public getAny(count: number=1){
		let shUsrs=new Users();
		Object.assign(shUsrs,this)
		shUsrs.shuffle();
		
		let result = count > this.users.length ? this.users.length : count;

		shUsrs.shuffle().users.splice(0, this.users.length-result);

		return shUsrs;
	  }

}

export { Users };
