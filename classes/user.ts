import { Api } from "./rest.Api"

class User {
	
	private login: string;
	private pwd: string;
	private auth:string;
	public api:Api;


	constructor(login: string,pwd: string) {
		this.login = login;
        this.pwd=pwd;
		let buff = new Buffer(`${this.login}:${this.login}`);
		this.auth = "Basic "+ buff.toString('base64');
		this.api= new Api(this);
        //this.instructionTypes=new InstructionTypes();
    }
	
	public getLogin () {
		return this.login;
	}

	public getPassword () {
		return this.pwd;
	}

	public getAuthStr () {
		return this.auth;
	}


}

export { User };
