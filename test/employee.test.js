// import {jest} from '@jest/globals';
const Employee  = require('../lib/employee');



describe('Test for the engineer class', () => {
  describe('Get employee name', () => {
    it('Should return employee name', () =>{
      const newEmployee = new Employee("Mike");
    expect(newEmployee.getName()).toEqual("Mike");
    })
  })

  
    describe('Get employee ID', () => {
      it('Should return employee ID', () =>{
      const newEmployee = new Employee("Mike", 2);
      expect(newEmployee.getId()).toEqual(2);
      })
    })

     describe('Get employee email', () => {
      it('Should return employee email', () =>{
        const newEmployee = new Employee("Mike", 2, "mcneal.jalen@yahoo.com", );
      expect(newEmployee.getEmail()).toEqual("mcneal.jalen@yahoo.com");
      })
    })
});

