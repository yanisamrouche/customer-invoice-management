/// <reference types="Cypress" />

// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
const BASE_URL = "http://localhost:4200/";

// Les fonctionnalités attendues pour les clients (customers)
describe("Customers features", () => {
  // Prenons le scénario classique :
  it("should create a new customer", () => {
    // En visitant la page d'accueil de l'application (/)
    cy.visit(BASE_URL)
      // Je dois pouvoir trouver un lien vers la page de création d'un client
      // qui doit rediriger sur /create
      .get("a.create-customer")
      .click()
      .url()
      .should("include", "/create");

    // Je dois pouvoir ensuite trouver un input.fullName
    cy.get("input.fullName")
      // Je tape "Joseph Dupont"
      .type("Joseph Dupont")
      // Je dois pouvoir trouver un input.email
      .get("input.email")
      // et taper "joseph@mail.com"
      .type("joseph@mail.com")
      // Je dois pouvoir trouver un bouton de type submit
      .get('button[type="submit"]')
      // Et lorsque je clique dessus, je suis redirigé vers la page d'accueil /
      .click()
      .url()
      .should("equal", BASE_URL);

    // Désormais, je devrais trouver un lien avec la classe customer-details
    cy.contains("Joseph Dupont")
      .first()
      // Et lorsque je click dessus, je dois me retrouver sur une URL de type /12 ou /30
      .click()
      .url()
      .should("match", /\/\d+$/);

    // Je dois pouvoir y retrouver l'email du client
    cy.contains("joseph@mail.com");
    cy.contains("Joseph Dupont");

    // Je dois pouvoir y retrouver le nom complet du client
    // Et un lien qui permette de revenir à la liste des clients (page d'accueil /)
    cy.get("a.back-to-customers").click().url().should("equal", BASE_URL);
  });
});

describe("Invoices feature", () => {
  it("should create and list invoices for a customer", () => {
    cy.visit(BASE_URL).get("a.create-customer").first().click();

    cy.get("input.fullName")
      .type("Elise Dupont")
      .get("input.email")
      .type("elise@mail.com")
      .get('button[type="submit"]')
      .click();

    cy.get("a.customer-details").contains("Elise Dupont").first().click();

    cy.get("a.invoice-create")
      .first()
      .click()
      .url()
      .should("match", /\/\d+\/invoices\/add$/);

    cy.get("input.amount")
      .type(1200)
      .get("select.status")
      .select("SENT")
      .get("button")
      .click()
      .url()
      .should("match", /\/\d+$/);

    cy.get("tr").contains("1200");
  });
});
