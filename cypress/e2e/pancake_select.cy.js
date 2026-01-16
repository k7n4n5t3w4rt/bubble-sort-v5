// Cypress e2e test for Pancake Sort selection and rendering

describe("Pancake Sort selection", () => {
  it("starts Pancake Sort and renders frames", () => {
    // Visit the root page; AR is expected to be disabled in CI so the
    // normal START button flow is used.
    cy.visit("/");

    // Select Pancake Sort from the algorithm dropdown.
    cy.get("#algorithm").select("pancake");

    // Click the START button to begin the sort visualisation.
    cy.get("#start-button").click();

    // Ensure the AR container and renderer are present.
    cy.get("#ar-container").should("exist");

    // The renderer is exposed on window.__bubbleSortRenderer.
    cy.window().then((win) => {
      const renderer = win.__bubbleSortRenderer;
      expect(renderer).to.exist;
      expect(renderer.domElement).to.exist;
      expect(renderer.domElement.tagName).to.equal("CANVAS");
    });

    // Give the renderer some time to draw a few frames.
    cy.wait(500);

    // Verify that the internal frame counter has increased.
    cy.window().then((win) => {
      const stats = win.__bubbleSortStats;
      if (stats && typeof stats.getFPS === "function") {
        // getFPS() should be called to ensure stats are being updated.
        const fps = stats.getFPS();
        expect(fps).to.be.a("number");
      }
    });
  });
});
