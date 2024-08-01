describe("Stock Current Data Test", () => {
  it("should load and display the stock data in a table with 10 rows", () => {
    cy.visit("http://localhost:3000/");
    cy.get("table").should("be.visible");
    cy.get("table tbody tr").should("have.length", 10);

    cy.get("table tbody tr").each((row, index) => {
      cy.wrap(row)
        .find("td")
        .eq(0)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.match(/^[A-Za-z0-9-]+$/); // Stock Prefix
        });
      cy.wrap(row)
        .find("td")
        .eq(1)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.match(/^\$\s?[0-9]+(\.[0-9]{1,2})?$/); // current price with space after "$" ($ 123.5)
        });
      cy.wrap(row)
        .find("td")
        .eq(2)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.match(/^[+-]?[0-9]+(\.[0-9]{1,2})?%$/); // daily change percentage (decimal with % afterwards)
        });
      cy.wrap(row)
        .find("td")
        .eq(3)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.match(/^[0-9]+$/); // volume in number
        });
      cy.wrap(row)
        .find("td")
        .eq(4)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.match(/^[0-9]+$/); // market cap in number
        });
    });
  });
});
