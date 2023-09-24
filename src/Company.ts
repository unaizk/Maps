import { faker } from "@faker-js/faker";

export class Company {
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
}