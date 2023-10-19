import { Employee } from "./employee.js";

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = "Engineer"
    }

    getRole(){
        return this.role
    }

    getGithub(){
        return this.gitHub
    }
    getHTML(){
      return `  <div class="card" style="width: 18rem;">
    <div class="card-body role">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text"><i class='fas fa-laptop' style='font-size:36px'></i> ${this.getRole()}</p>
      </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${this.id}</li>
      <li class="list-group-item">Email:<a class="link-opacity-50-hover" href="#"> ${this.email}</a></li>
      <li class="list-group-item">Github:<a class="link-opacity-50-hover" href="#"> ${this.getGithub()}</a></li>
    </ul>
  </div>`
    }
}

export {Engineer}
