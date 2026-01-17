// -----------------------------------------------------------------
// E2E: Preset select applies URL-based 3D parameters
// -----------------------------------------------------------------

/**
 * Verifies that choosing a Preset option on the landing page
 * reloads the app with the expected query string and that the
 * sorting algorithm reflects the preset after reload.
 */
describe("Preset select", () => {
  it("applies the Bitonic preset via URL reload", () => {
    // Initial load: landing page with default/custom parameters
    cy.visit("/");

    // Preset select should exist and default to a neutral/blank option
    cy.get("select#preset").should("exist");

    // Select the Bitonic preset by visible label
    cy.get("select#preset").select("Bitonic");

    // Expected query string for the Bitonic preset, based on
    // the documented presets in ThreeSortingParams.js
    const bitonicQuery =
      "?cols=6&rows=11&speed=5&scalex=1.2&scaley=2.3&scalez=1.9&algorithm=bitonic&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000";

    // After selecting a preset, the app should reload with the
    // preset query string applied.
    cy.location("search").should("eq", bitonicQuery);

    // Algorithm select should reflect the preset's algorithm after reload
    cy.get("select#algorithm").should("have.value", "bitonic");
  });
});
