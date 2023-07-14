import inquirer from "inquirer";
// import { Manager } from './lib/manager.js';
import { Intern } from "./lib/intern.js";
// import { Engineer} from './lib/engineer.js'
import { Manager } from './lib/manager.js';

const teamArr = [];
const managerInfo =
    [
        {
            type: 'input',
            message: 'what is the name of the team member',
            name: 'name',
            validate: (input) => input ? true : "Enter input",
        },
        {
            type: 'input',
            message: 'what is your  employee ID ',
            name: 'id',
            validate: (input) => input ? true : "Enter input",
        },
        {
            type: 'input',
            message: 'what is your  email address',
            name: 'email',
            validate: function ee(email) {
                const verify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if (verify.test(email)) {
                    return true
                } else {
                    email = ""
                    return "Enter valid email"
                }
            }

        },
        {

            type: 'input',
            message: 'what is your office number',
            name: 'office',
            validate: (input) => input ? true : "Enter Input",
        }

    ]

const addEmployee = [
    {
        type: 'list',
        message: 'which type of team member would you like to add',
        name: 'role',
        choices: ['Engineer', 'Intern', 'I dont want to add another team member'],
        validate: (input) => input ? true : 'Enter Input',

    }
]

const employeeInfo = [
    {
        type: 'input',
        message: 'what is the name of the team member',
        name: 'name',
        validate: (input) => input ? true : "Enter input",
    },
    {
        type: 'input',
        message: 'what is your  employee ID ',
        name: 'id',
        validate: (input) => input ? true : "Enter input",
    },
    {
        type: 'input',
        message: 'what is your  email address',
        name: 'email',
        validate: function ee(email) {
            const verify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (verify.test(email)) {
                return true
            } else {
                email = ""
                return "Enter valid email"
            }
        }

    },
]


// const managerInput = [
//     {
//         type: 'input',
//         message: 'what is your office number',
//         name: 'office',
//         validate: (input)=> input ? true : "Enter Input",
//      }
// ]

// const engineerInfo = [
//     {
//         type: 'input',
//         message: 'What is you Github name',
//         name: 'github',
//         validate: (input) => input ? true : "Enter Input"
//     }
// ]

const internInfo = [
    {
        type: 'input',
        message: 'What is the name of the school that you attended',
        name: "school",
        validate: (input) => input ? true : "Enter Input"
    }
]




const managerInput = async () =>{
    try{
        const ManagerRes =  await inquirer.prompt(managerInfo)
        const ManagerObj = new Manager(ManagerRes.name, ManagerRes.id, ManagerRes.email, ManagerRes.office)
        teamArr.push(ManagerObj);
        console.log(teamArr)

        const employee = await inquirer.prompt(addEmployee)
        const role = employee.role 

        if( role === 'Intern' || role === 'Engineer' ){
            if(role === 'Intern'){
                const newEmployeeRes = await inquirer.prompt(employeeInfo)
                const internRes = await inquirer.prompt(internInfo)
                const employeeObj = new Intern(newEmployeeRes.name, newEmployeeRes.id, newEmployeeRes.email, internRes.school)
                teamArr.push(employeeObj);
                console.log(teamArr)
            }else{
                const newEmployeeRes = await inquirer.prompt(employeeInfo)
            }
        }else if(role === 'I dont want to add another team member'){
            console.log('Your team is complete')
        }
    }
    catch (e){
        console.log('We have the error',)
    }
  
    }


managerInput();


// init();