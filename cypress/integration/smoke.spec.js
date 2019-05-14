describe("Smoke Test", () => {
  it("Makes sure the welcome message come up", () => {
    cy.visit("http://localhost:3000").contains("USGS Earthquakes");
  });
});
