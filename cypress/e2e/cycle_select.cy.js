// Verify that selecting Cycle Sort initializes and renders the 3D canvas.
describe("Cycle Sort selection", () => {
  it("initializes renderer and renders after selecting Cycle", () => {
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
    // Switch to Cycle Sort using its label.
    cy.get("#algorithm").select("Cycle Sort");

    // Start normal 3D mode.
    cy.get("#start-button").should("be.visible").and("contain.text", "START");
    cy.get("#start-button").click();

    // Renderer container should now exist.
    cy.get("#ar-container").should("exist");

    // Confirm renderer is created and its canvas is mounted.
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
// @flow
// Verify that selecting Cycle Sort initializes and renders the 3D canvas.
describe("Cycle Sort selection", () => {
  it("initializes renderer and renders after selecting Cycle", () => {
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
    // Switch to Cycle Sort (either by value or label).
    cy.get("#algorithm").select("Cycle Sort");

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
