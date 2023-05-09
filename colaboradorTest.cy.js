
describe("Colaborador 1 Test", () => {
  function clickAndWait(selector, waitTime) {
    cy.get(selector).click();
    if (waitTime) {
      cy.wait(waitTime);
    }
  }

  function typeAndWait(selector, text, waitTime) {
    cy.get(selector).type(text);
    if (waitTime) {
      cy.wait(waitTime);
    }
  }

  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://192.168.100.101:8080/gestionate/app/#");
    typeAndWait('#mat-input-0', 'test.colaborador1', 500);
    typeAndWait('#mat-input-1', 'Temporada24', 500);
    clickAndWait('#btnIngresar', 500);
  });

  it("Paseo x app", () => {
    const tabs = ['#mat-tab-label-1-1', '#mat-tab-label-0-1', '#mat-tab-label-0-2', '#mat-tab-label-0-0', '#mat-tab-label-1-0'];
    tabs.forEach((tab) => {
      clickAndWait(tab, 500);
    });
    clickAndWait('#addNovedadButton', 500);
    cy.get('.mat-form-field-wrapper').click()
    cy.contains("Falta Injustificada").click();
    clickAndWait('#btnSiguiente', 500);
    clickAndWait('.desde', 500);
    cy.contains("10").click();
    clickAndWait('.hasta', 500);
    cy.contains("19").click();
    typeAndWait('#inputObservaciones', 'Testing cc Cypress12', 0);
    clickAndWait('#btnGuardar3', 1000);
    clickAndWait('#arrowBack5', 2000);
    clickAndWait('#addNovedadButton', 500);
    clickAndWait('#btnCualitativa', 500);
    cy.get('.mat-form-field-wrapper').click()
    cy.contains("Licencias Especiales").click();
    clickAndWait('#btnSiguiente', 500);
    clickAndWait('.desde', 500);
    cy.contains('18').click()
    clickAndWait('.hasta', 500);
    cy.contains('24').click()
    typeAndWait('#inputObservaciones', 'Testing cc Cypress12', 0);
    clickAndWait('#btnGuardar3', 1000);
    clickAndWait('#arrowBack5', 2000);
    cy.contains('Logout').click().wait(2000)
  });
});