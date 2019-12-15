
class Api {
	
    private auth: string;
    private req:any ;
    private baseApi: string;
    
	
	constructor(auth: string) {
		
        //this.instructionTypes=new InstructionTypes();
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        this.req= new XMLHttpRequest();
        this.req.timeout = 30000; // 30 секунд (в миллисекундах)
        this.baseApi= 'http://dsud-fk-msk/LanDocs.WebApi.NetCore/';
        this.auth=auth;

    }

    private fullURL(method:string):string {
        return this.baseApi+'api/v1'+ method;
    }
	
	public getVersion ():string {
        this.req.open('GET', this.fullURL('/admin/apiversion'), false);
        this.req.send(null);
        return this.req.responseText;
    }

    public userAuthenticate():string {
        this.req.open('POST', this.fullURL('/auth/basic'), false);
        this.req.send(null);
        return this.req.responseText;
    }

	
}

export { Api };
