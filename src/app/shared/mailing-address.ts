export interface IMailingAddress {
    address: string;
    city: string;
    stateCode: string;
    zipCode: string;
}

export class MailingAddress {
    address: string;
    city: string;
    stateCode: string;
    zipCode: string;

    constructor() {
        this.address = '';
        this.city = '';
        this.stateCode = '';
        this.zipCode = '';
    }
}
