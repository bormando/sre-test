const supertest = require('supertest');

class CountriesHelper {
    constructor() {
        this.response = null;
    }

    async getCountries() {
        await supertest('https://sre-test-api.herokuapp.com')
            .get('/country_codes')
            .then(res => {
                this.response = res;
            });
        return this.response;
    }
}

module.exports = CountriesHelper;