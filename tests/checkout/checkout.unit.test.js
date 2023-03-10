const catalog = require('../../models/catalog')
const chai = require('chai'),
  expect = chai.expect

//Unit test for catalog function
describe('[Unit] catalog method - returns watch details by ID', () => {
    it('should return watch details for valid payload', async () => {
        const payload = "002"

        const expectedOutput = {
            watchID: '002',
            watchName: 'Michael Kors',
            price: 80,
            discountAvailable: true,
            discountQuantity: 2,
            discountPrice: 120,
        }

        const res = catalog.getCatalogByID(payload)

        expect(res).to.be.an('object')
        expect(res).to.deep.equal(expectedOutput)
    })
});