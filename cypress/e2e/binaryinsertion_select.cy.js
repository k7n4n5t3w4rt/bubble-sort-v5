// Verify that selecting Binary Insertion Sort initializes and renders the 3D canvas.

describe("Binary Insertion Sort selection", () => {
  it("initializes renderer and renders after selecting Binary Insertion", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        // Ensure the normal START button is shown (no AR path).
        try {
          Object.defineProperty(win.navigator, "xr", {
            value: undefined,
            configurable: true,
          });
        } catch (e) {
          // ignore
        }
      },
    });

    // Algorithm selector exists and is visible.
    cy.get("#algorithm").should("be.visible");
    // Switch to Binary Insertion Sort by label.
    cy.get("#algorithm").select("Binary Insertion Sort");

    // Start normal 3D mode.
    cy.get("#start-button").should("be.visible").and("contain.text", "START");
    cy.get("#start-button").click();

    // Renderer container should now exist.
    cy.get("#ar-container").should("exist");

    // Confirm renderer is created and its canvas is mounted (avoid Stats canvas confusion).
    cy.window()
      .its("__bubbleSortRenderer")
      .should("exist")
      .then((renderer) => {
        expect(renderer).to.have.property("domElement");
        expect(renderer.domElement).to.have.property("tagName", "CANVAS");
        cy.document().then((doc) => {
          expect(doc.body.contains(renderer.domElement)).to.eq(true);
        });

        // Confirm it is actually rendering (frame counter increments).
        const startFrame = renderer.info?.render?.frame ?? 0;
        cy.wait(250).then(() => {
          const endFrame = renderer.info?.render?.frame ?? 0;
          expect(endFrame).to.be.greaterThan(startFrame);
        });
      });
  });
});
