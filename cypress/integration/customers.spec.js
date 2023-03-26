/// <reference types="Cypress" />

import { API_URL, API_KEY, BASE_URL, resetDatabase } from "../utils";

// Les fonctionnalités attendues pour les clients (customers)
describe("Customers Features", () => {
  // Avant chaque test, je supprime tout ce qui se trouve dans la base de données distante via une requête HTTP
  beforeEach(() => resetDatabase());

  // Testons le scénario de création d'un client
  // Il permet non seulement de tester qu'on peut créer un client mais
  // surtout qu'on retrouve dans la page d'accueil la liste des clients créés
  it("should create a new customer", () => {
    // En visitant la page d'accueil de l'application (/)
    cy.visit(BASE_URL)
      // Je dois pouvoir trouver un lien vers la page de création d'un client
      // dont le texte soit "Créer un client" qui doit rediriger sur /create
      .contains("Créer un client")
      .click()
      .url()
      .should(
        "equal",
        BASE_URL + "create",
        "L'adresse aurait du changer pour '/create' après le click 😞"
      );

    // Je dois pouvoir ensuite trouver un élément dont l'attribut name sera "fullName"
    cy.get("[name=fullName]")
      // Je tape "Joseph Dupont"
      .type("Joseph Dupont")
      // Je dois pouvoir trouver un élément dont l'attribut name sera "email"
      .get("[name=email]")
      // et taper "joseph@mail.com"
      .type("joseph@mail.com");

    // Je dois pouvoir trouver un bouton dont le texte sera "Enregistrer"
    cy.contains("Enregistrer")
      // Et lorsque je clique dessus, je suis redirigé vers la page d'accueil /
      .click()
      .url()
      .should(
        "equal",
        BASE_URL,
        "L'adresse aurait du changer pour la page d'accueil (/) 😞"
      );

    // Désormais, je devrais trouver dans la page le nom de mon client sous la forme d'un lien
    cy.contains("Joseph Dupont")
      .first()
      // Et lorsque je click dessus, je dois me retrouver sur une URL de type /12 ou /30
      .click()
      .url()
      .should(
        "match",
        /\/\d+$/,
        "L'adresse aurait du changer pour '/:id' avec :id étant l'identifiant de Joseph Dupont 😞"
      );

    // Je dois pouvoir y retrouver l'email du client
    cy.contains("joseph@mail.com");
    cy.contains("Joseph Dupont");

    // Je dois pouvoir y retrouver le nom complet du client
    cy.contains("Joseph Dupont");

    // Et un lien qui permette de revenir à la liste des clients (page d'accueil /)
    // dont le texte sera "Retour aux clients"
    cy.contains("Retour aux clients")
      .click()
      .url()
      .should(
        "equal",
        BASE_URL,
        "L'adresse aurait du changer pour la page d'accueil ('/') 😞"
      );
  });
});