import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
    companyName : string;
    companyPhrase : string;

    location : {
        lat : number;
        lng : number;
    }

    constructor(){
        this.companyName = faker.company.name();
        this.companyPhrase = faker.company.catchPhraseNoun();

        this.location = {
            lat : faker.location.latitude(),
            lng : faker.location.longitude(),
        }
    }

    markerContent():string{
        return `
        <div>
            <p> <strong> Company name :</strong>   ${this.companyName} </p>
            <p> <strong>Company phrase  :</strong> ${this.companyPhrase}</p> 
        </div>`
        
    }
}