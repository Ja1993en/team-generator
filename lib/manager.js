const Employee  = require('./employee.js');

class Manager extends Employee{
    constructor(officeNumber, name, id, email,){
        super (name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }
    getOfficeNumber(){
      return this.officeNumber
    }
    getRole(){
        return this.role;
    }

    getHTML(){
        return  `  <div class="card" style="width: 18rem;">
            <div class="card-body role">
              <h5 class="card-title">${this.name}</h5>
            <p class="card-text"><i class='fas fa-mug-hot' style='font-size:36px'></i> ${this.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${this.id}</li>
              <li class="list-group-item">office Number: ${this.getOfficeNumber()}</li>
              <li class="list-group-item">Email:<a class="link-opacity-50-hover" href="#"> ${this.email}</a></li>
            </ul>
          </div>`
        
    }
}



module.exports = Manager;