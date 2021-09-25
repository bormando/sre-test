const expect = require('chai').expect;
const CountriesHelper = require('../helpers/countries.helper');

describe('Countries', function() {
    const countriesHelper = new CountriesHelper();

    before(async function() {
        await countriesHelper.getCountries();
    })

    it('response status code is 200', function() {
        expect(countriesHelper.response.statusCode).to.eq(200);
    });

    it('response body is defined', function() {
        expect(countriesHelper.response.body).not.to.be.undefined;
    });
});