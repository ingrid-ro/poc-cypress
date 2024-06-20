Cypress.Commands.add("makeRequest", (url, method, headers, body) => {
    cy.request({
        url: url, // Alterado para 'url' em minúsculas
        method: method,
 //       headers: headers, // Se desejar usar 'Headers', certifique-se de que está definido em algum lugar
        body: body,
        failOnStatusCode: false,
    })
    .should('not.be.empty')
    .then((res) => res);
});

Cypress.Commands.add('addTestContext', (title, value) => {
    cy.once('test:after:run', (test) => {
        addContext({ test }, { title, value });
    });
});
