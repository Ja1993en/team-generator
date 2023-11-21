const Intern = require('../lib/intern')

describe('This should test the Intern class', () => {
    describe('Get interns school', () => {
        it('Should return intern school', () => {
            const newIntern = new Intern("Arnold Strong", 3, "strongar@gmail.com", "Fern Creek");
            expect(newIntern.getSchool()).toEqual("Fern Creek")
        })
    })

    describe('Get employee role', ()=> {
        it('Should return employee role', () => {
            const newIntern = new Intern();
            expect(newIntern.getRole()).toEqual("Intern")
        })
    })
})