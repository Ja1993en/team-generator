const fs = require('fs');
const inquirer = require('inquirer');

const Intern  = require('./lib/intern.js');
const Engineer = require('./lib/engineer.js');
const Manager  = require('./lib/manager.js');
const Employee  = require('./lib/employee.js');

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
    // independently then call the next step based on user input 
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
    // try /catch is a error handling method it will try the function
    // it will follow the instructions until the code is broken and return a error
    try{
        // This sets a variable and use async await to called the inquirer object 
        const ManagerRes =  await inquirer.prompt(managerInfo)
        // once data is collected from inquirer statement it will create a new class 
        const ManagerObj = new Manager(ManagerRes.name, ManagerRes.id, ManagerRes.email, ManagerRes.office)
        //We are storing the new Manager object to a global variable 
        // empty global object to collect all inquirer responses 
        teamArr.push(ManagerObj.getHTML());
        
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
                
                teamArr.push(employeeObj.getHTML());
                console.log(teamArr)
            }else {
                const newEmployeeRes = await inquirer.prompt(employeeInfo)
                const engineerRes = await inquirer.prompt(engineerInfo)
                const engineerObj = new Engineer(newEmployeeRes.name, newEmployeeRes.id, newEmployeeRes.email, engineerRes.github)
                // getHTML is calling the function from the class object 
                teamArr.push(engineerObj.getHTML());
                console.log(teamArr)

            }
            // this add member function is at the bottom of the original 
            //if statement comes after the function is done collected data 
            //it runs the function again to check if you would like to add another member
            // This is why I had to seperated manager function so it will not add another manager 
            addMember();
        }else if(role === 'I dont want to add another team member'){

            console.log('Your team is complete')
            //Place the if statement inside of the else if because
            //Once your team is complete you want to render the HTML page

            htmlPage();
        }
     

    }





const htmlPage = async () =>{
   
    fs.writeFile('index.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="./assets/main.css">
        <title>Document</title>
    </head>
    <body>m
    
    
    
    <header class="jumbotron">
        <h1>Team Builder</h1>
    </header>
    
    <div class=" member d-flex align-items-end justify-content-center flex-row bd-highlight mb-3">
    ${teamArr}
    </div>
    
    </div>
    
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="./index.js"></script>
    </body>
    </html>
    `
     , (err) => {
    if (err) throw err;
    console.log('Team Saved!');
});
}

 managerInput();