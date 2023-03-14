export class User {
    public email: string;
    public password: string;
    public firstName?: string;
    public lastName?: string;
    public cellphone?: string;
    constructor(
        email: string,
        password: string,
        firstName?: string,
        lastName?: string,
        cellphone?: string,
      
    ) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cellphone = cellphone;
      
        
    }
}





