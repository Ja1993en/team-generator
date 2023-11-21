const Employee  = require('./employee.js')

class Intern extends Employee{
    constructor( name, id, email, school){
        super (name, id, email);
        this.school = school;

    }
    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.school
    }

    getHTML(){
       return  ` 
       <div class="card" style="width: 18rem;">
            <div class="card-body role">
              <h5 class="card-title">${this.name}</h5>
             <p class="card-text"> <i class='fas fa-user-graduate' style='font-size:36px'></i> ${this.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${this.id}</li>
              <li class="list-group-item">School: ${this.getSchool()}</li>
              <li class="list-group-item">Email:<a class="link-opacity-50-hover" href="google.com"> ${this.email}</a></li>
            </ul>
          </div>`
    }
}

module.exports = Intern;