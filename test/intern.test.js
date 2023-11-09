const Intern = require('../lib/intern')

describe('This should test the Intern class', () => {
    describe('Get interns school', () => {
        it('Should return intern school', () => {
            const newIntern = new Intern('Fern Creek');
            expect(newIntern.getSchool()).toEqual('Fern Creek')
        })
    })
})