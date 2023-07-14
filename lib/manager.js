import { Employee } from "./employee.js"; 

class Manager extends Employee{
    constructor(name, id, email, officeNumber ){
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    

}



export { Manager}