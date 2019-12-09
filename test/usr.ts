import { Users } from "./../classes/users";
//import {User} from "./../classes/user"
//import axios from 'axios';
//import { SSL_OP_EPHEMERAL_RSA } from "constants";
//import { version } from "punycode";
//import request from 'sync-request' ;
//import { setupMaster } from "cluster";


//let user=new User('', '');


let users= new Users();
users.loadFromJsonFile('./config/users.json');
users.users[1].api.getApiVersion();

console.log("Gjckt + " + users.users[0].api.getResponse());



/*function setupUser() {
    axios.get(`http://dsud-fk-msk/LanDocs.WebApi.NetCore/api/v1/admin/apiversion`)
        .then(response => {
            user.version = String(response.data)
            console.log('User!!!! ' + user.version)                            
        })
        .catch(error => console.log('Error', error))           

}*/




/*xios.get(`http://dsud-fk-msk/LanDocs.WebApi.NetCore/api/v1/admin/apiversion`)
        .then(response => makeTestAsync(response.data))
        .catch(error => console.log('Error', error))       
  */      

/*function makeTestAsync(version: String) {
    console.log("The version getted with Async request is " + version);    
}*/


/*var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let req = new XMLHttpRequest();
req.open('GET', `http://dsud-fk-msk/LanDocs.WebApi.NetCore/api/v1/admin/apiversion`, false);  // `false` makes the request synchronous
req.send(null);

var myVersion = "unknown"
if (req.status == 200) {
    myVersion = req.responseText  
}

console.log("The version getted with XMLHttpRequest is " + myVersion);

var res = request('GET', 'http://dsud-fk-msk/LanDocs.WebApi.NetCore/api/v1/admin/apiversion');
myVersion = String(res.getBody());

console.log("The version getted with syn-request is " + myVersion);*/
