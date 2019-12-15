class Api {
	
    private cookies: string;
    private req:any;
    
	
	constructor(auth: string) {
		
        //this.instructionTypes=new InstructionTypes();
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        this.req= new XMLHttpRequest();

    }
	
	public getVersion ():string {
        this.req.open('GET', `http://dsud-fk-msk/LanDocs.WebApi.NetCore/api/v1/admin/apiversion`, false);
        this.req.send(null);
        var myVersion = "unknown"
        if (this.req.status == 200) {
            myVersion = this.req.responseText;  
        }
        //console.log("The version getted with XMLHttpRequest is " + myVersion);
		return myVersion;
    }

    
    

	
}

export { Api };
