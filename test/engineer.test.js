const Engineer  = require('../lib/engineer');

describe('Test for the engineer class', () => {
    describe('Get engineer Github', ()=> {
        it('Should return engineer Github', () => {
            const newEngineer = new Engineer("Sosa Sammy", 3, "sammy@gmail.com", "ja1993en");
            expect(newEngineer.getGithub()).toEqual("ja1993en")
        })
    })

    describe('Get employee role', ()=> {
        it('Should return employee role', () => {
            const newEngineer = new Engineer();
            expect(newEngineer.getRole()).toEqual("Engineer")
        })
    })
})