describe("Login-Test", () => {

  before(() => {
    cy.viewport(1440, 900);                  
    cy.visit("http://192.168.100.101:8080/gestionate/app/#");
  });
  
  const waitTime = (500);
  
  function fillLoginForm(username, password) {
    cy.get('#mat-input-0').type(username);
    cy.get('#mat-input-1').type(password);
    cy.get('#Ojito').click()
  }
  
  function submitLoginForm() {
    cy.get('#btnIngresar').click().wait(waitTime);
  }
  
  function waitAndAssert() {
    cy.contains('El usuario o la contraseña son incorrectos').should('be.visible').wait(waitTime);
  }
  
  function clearLoginForm() {
    cy.get('#mat-input-0').clear();
    cy.get('#mat-input-1').clear();
  }
  
  it("login con errores pruebas", () => {
    fillLoginForm('test.colaborador1', 'wrongPass');
    submitLoginForm();
    waitAndAssert();
    
    clearLoginForm();
    fillLoginForm('NNUser', 'Temporada24'); //MODIFICAR CONTRASEÑAS CUANDO SEAN ACTUALIZADAS
    submitLoginForm();
    waitAndAssert();
  
    clearLoginForm();
    fillLoginForm('NNUser', 'wrongPass');
    submitLoginForm();
    waitAndAssert();
  
    clearLoginForm();
    fillLoginForm('test.colaborador1', 'Temporada24'); //MODIFICAR CONTRASEÑAS CUANDO SEAN ACTUALIZADAS
    submitLoginForm();
    });
  });