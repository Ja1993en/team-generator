import inquirer from "inquirer";
import { Intern } from "./lib/intern.js";
import { Engineer} from './lib/engineer.js'
import { Manager } from './lib/manager.js';

//This collects all of the data 
const teamArr = [];

//This is a variable with object with the structure a inquirer statement 
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
                // this verifies what was entered matches email format 
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


    // This is a seperate veriable for add member so it can be called 
    // independently and call the next step based on user input 
const addEmployee = [
    {
        type: 'list',
        message: 'which type of team member would you like to add',
        name: 'role',
        choices: ['Engineer', 'Intern', 'I dont want to add another team member'],
        validate: (input) => input ? true : 'Enter Input',

    }
]

// This is general questions for the new employee if one was selected from 
//addEmployee variable 
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


const engineerInfo = [
    {
        type: 'input',
        message: 'What is you Github name',
        name: 'github',
        validate: (input) => input ? true : "Enter Input"
    }
]

const internInfo = [
    {
        type: 'input',
        message: 'What is the name of the school that you attended',
        name: "school",
        validate: (input) => input ? true : "Enter Input"
    }
]



// This is the function that ignitiate the app. The will only be one 
// 
const managerInput = async () =>{
    // try /catch is a error handling method it will try the 
    // it will follow the instructions until the code is broken and return a error
    try{
        // This sets a variable and use async await to called the inquirer object 
        const ManagerRes =  await inquirer.prompt(managerInfo)
        // once data is collected from inquirer statement it will create a new class 
        const ManagerObj = new Manager(ManagerRes.name, ManagerRes.id, ManagerRes.email, ManagerRes.office)
        //We are storing the new Manager object to a global variable 
        // empty global object to collect all inquirer responses 
        teamArr.push(ManagerObj);
        console.log(teamArr)
        // Calls the add Member function
        addMember();
    }
    catch (e){
        console.log('We have the error',)
    }
  
    }


    // Async await function for add member 
    const addMember = async () =>{
        // Calls the addEployee inquirer statement 
        const employee = await inquirer.prompt(addEmployee)
        // Variable for the response of the inquirer statement 
        const role = employee.role 

        // if statement to check if user would like to add a member 
        if( role === 'Intern' || role === 'Engineer' ){
            // if member did want to add a member the if statment 
            // what kind of member the user would like to add 
            if(role === 'Intern'){
                const newEmployeeRes = await inquirer.prompt(employeeInfo)
                const internRes = await inquirer.prompt(internInfo)
                const employeeObj = new Intern(newEmployeeRes.name, newEmployeeRes.id, newEmployeeRes.email, internRes.school)
                
                teamArr.push(employeeObj);
                console.log(teamArr)
            }else {
                const newEmployeeRes = await inquirer.prompt(employeeInfo)
                const engineerRes = await inquirer.prompt(engineerInfo)
                const engineerObj = new Engineer(newEmployeeRes.name, newEmployeeRes.id, newEmployeeRes.email, engineerRes.github)
                teamArr.push(engineerObj);
                console.log(teamArr)

            }

            // this add member function is at the bottom of the original 
            //iif statement because after the function is done collected data 
            //it runs the function again to check if you would like to add another
            // This is why I had to seperated manager function so it will not as to add another manager 
            addMember();
        }else if(role === 'I dont want to add another team member'){
            console.log('Your team is complete')
        }
     
        
    }

    // Have a function that will loop through object and input the data that is necessary 

//We need to gather all data from global object and fs write file 


managerInput();


// init();