export interface IPerson {
    name: string;
    title: string;
    email: string;
}

export class Person implements IPerson {    
    name: string;
    title: string;
    email: string;

    constructor() {
        this.name = '';
        this.title = '';
        this.email = '';
    }
}
