const Manager = require('../lib/manager');

describe('Test for the manager class', () => {
    describe('Get employees role', () => {
        it('Should return employee role', () => {
            const newManager = new Manager();
            expect(newManager.getRole()).toEqual("Manager");
        })
    })

    describe('Get managers office number', () => {
        it('Should return managers office number', () => {
            const newManager = new Manager("Malcom Stive" , 2, "malcom@gmail.com", 444);
            expect(newManager.getOfficeNumber()).toBe(444);
        })
    })
})