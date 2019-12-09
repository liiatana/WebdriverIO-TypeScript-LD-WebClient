import { User } from "./user";
import  axios  from 'axios';
//const axios = require('axios').default;

class Api {
	
	private cookies:String;
    //private apiPath:String ;
    private result:String ;
    
	
	constructor(user: User) {
        //this.apiPath= "http://dsud-fk-msk/LanDocs.WebApi.NetCore/api/v1";
        axios.defaults.baseURL = 'http://dsud-fk-msk/LanDocs.WebApi.NetCore/api/v1';
        this.result="";
    }
	
	public getApiVersion(){
        axios.get(`/admin/apiversion`)
        .then(response => {
            this.result=response.data;                            
        })
        .catch(error => console.log('Error', error))  
		return this;
    }
    
    public getResponse(){
        return this.result;
    }


}

export { Api };
