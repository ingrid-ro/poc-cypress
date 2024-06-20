import urlBase from "../../fixtures/url-base.json";

class RequestPostAddPet {
  postRequestPostAddPet200() {
    return cy.fixture('fixture-post-add-pet-200')
    .then((fixture) => {
     
     
      return cy
        .makeRequest(`${urlBase.urlBase}/pet/addPet`, 'POST', fixture)
        .as('postRequestPostAddPet200');
    });
  }
}

export default new RequestPostAddPet();