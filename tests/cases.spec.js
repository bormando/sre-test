const expect = require('chai').expect;
const CountriesHelper = require('../helpers/countries.helper');
const CasesHelper = require('../helpers/cases.helper');
const { getRandomValue } = require('../helpers/common.helper');

describe('Cases', function() {
    const countriesHelper = new CountriesHelper();
    const casesHelper = new CasesHelper();
    let country;

    before(async function() {
        await countriesHelper.getCountries();
        country = await getRandomValue(countriesHelper.response.body);
        await casesHelper.getCases(country);
    })

    it('response status code is 200', function() {
        expect(casesHelper.response.statusCode).to.eq(200);
    });

    it('response body is defined', function() {
        expect(casesHelper.response.body).not.to.be.undefined;
    });

    it('response body contains country code from request', async function() {
        const countryCase = await getRandomValue(casesHelper.response.body);
        await expect(countryCase['Country_code']).to.eq(country);
    });
});