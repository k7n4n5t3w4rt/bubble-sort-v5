//------------------------------------------------------------------
// E2E: URL scale params preserve decimals
//------------------------------------------------------------------

/**
 * Ensures that when the landing page is opened with decimal scalex/scaley
 * query parameters, the URL remains unchanged (no flooring to integers)
 * after the app initialises and syncs query params from state.
 */
describe("Scale params from URL", () => {
  it("preserves decimal scalex/scaley values in URL", () => {
    const query =
      "?cols=7&rows=12&speed=5&scalex=15.7&scaley=20.8&scalez=10&algorithm=bitonic&diffuseSwapsPerTick=0&diffuseNeighborRadius=1&unsortPauseMs=20000";

    cy.visit("/" + query);

    cy.location("search").then((search) => {
      /** @type {URLSearchParams} */
      const params = new URLSearchParams(search);
      expect(params.get("scalex")).to.eq("15.7");
      expect(params.get("scaley")).to.eq("20.8");
    });
  });
});
