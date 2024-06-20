import RequestPostAddPet from '../../support/requests/request-add-pet'
import assertPostAddPet200 from '../../support/assertions/assertion-add-pet'

describe("Criação de um pet no sistema", () => {
  it("Verificar se o pet foi criado com sucesso", () => {
    RequestPostAddPet.postRequestPostAddPet200();
    cy.get("@postRequestPostAddPet200").then((response) => {
      assertionAddPet.assertPostAddPet200(response);
    });
  });
});
