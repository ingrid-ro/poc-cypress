class AssertionAddPet {
  assertPostAddPet200(response) {
      cy.log('Response from POST request to add pet:', response.body);

      expect(response.status).to.eq(200);
      cy.log(`ID of the created pet: ${response.body.id}`);
  }
}

export default AssertionAddPet;
