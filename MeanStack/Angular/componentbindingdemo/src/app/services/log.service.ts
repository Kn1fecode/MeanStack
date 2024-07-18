import {Injectable} from "@angular/core";
@Injectable()
export class LogService{
    LogMessage(message:string){
        console.log('service message recieved: '+message);
    }
}