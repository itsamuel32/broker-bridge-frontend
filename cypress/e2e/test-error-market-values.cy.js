describe("Endpoint Down Test", () => {
  it("should display an error message when the api gateway is down", () => {
    cy.visit("http://localhost:3000/");

    cy.intercept("GET", "http://localhost:8082/top10").as("fetchDataFail");

    // Wait for the API call to be made and the interception to occur
    cy.wait("@fetchDataFail");

    cy.get("tbody tr td").should("contain", "Assets are not displayed.");
  });
});
