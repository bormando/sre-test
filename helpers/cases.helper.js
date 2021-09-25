const supertest = require('supertest');

class CasesHelper {
    constructor() {
        this.response = null;
    }

    async getCases(country) {
        await supertest('https://sre-test-api.herokuapp.com')
            .get(`/country/${country}`)
            .then(res => {
                this.response = res;
            });
        return this.response;
    }
}

module.exports = CasesHelper;