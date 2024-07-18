import {Injectable} from "@angular/core";
@Injectable()
export class DataService{
    names:string[]=["Ansh","Bina","Chakuli","Diya","Eshani"];

    getNames(){
        return this.names;
    }

    addName(name:string)
    {
        this.names.push(name);
    }

    deleteName(name)
    {
        let indexPosition=this.names.indexOf(name);
        this.names.splice(indexPosition,1);
    }
}