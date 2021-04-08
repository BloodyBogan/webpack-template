/// <reference types="Cypress" />

describe('Test', () => {
    it('Not much happening here', () => {
        expect(true).to.equal(true);
    });
});

describe('Fixture test', () => {
    let sampleData;

    before(async () => {
        sampleData = await cy.fixture('sample');
    });

    it('Is running', () => {
        expect(sampleData.running).to.equal(true);
    });
});
