describe("Calculator", () => {
  it("should display number 7 from user input", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
    // get the number container and click a button
    const buttonNumber7 = cy.get("#input__7");
    buttonNumber7.click();
    //get display from the page
    const display = cy.get("#display__expression");
    //check that the display contains the right text/matches user input
    display.should("contain", "7");
  });
  it("should clear the display when clear button is pressed", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
    const clearButton = cy.get("#input__clear");
    clearButton.click();
    const display = cy.get(".display");
    display.should("contain", "0");
  });
  it("should remove the last input from calcualtion display when the backspace button is pressed", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
    const backspaceButton = cy.get("#input__backspace");
    backspaceButton.click();
    const equationDisplay = cy.get("#display__expression");
    equationDisplay.should();
  });
});
//read the docs docs.cypress.io
