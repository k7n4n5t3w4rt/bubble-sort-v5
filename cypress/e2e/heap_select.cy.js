// Verify that selecting Heap Sort initializes and renders the 3D canvas.
describe("Heap Sort selection", () => {
  it("initializes renderer and renders after selecting Heap", () => {
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

    cy.get("#algorithm").should("be.visible");
    cy.get("#algorithm").select("Heap Sort");

    cy.get("#start-button").should("be.visible").and("contain.text", "START");
    cy.get("#start-button").click();

    cy.get("#ar-container").should("exist");

    cy.window()
      .its("__bubbleSortRenderer")
      .should("exist")
      .then((renderer) => {
        expect(renderer).to.have.property("domElement");
        expect(renderer.domElement).to.have.property("tagName", "CANVAS");
        cy.document().then((doc) => {
          expect(doc.body.contains(renderer.domElement)).to.eq(true);
        });

        const startFrame = renderer.info?.render?.frame ?? 0;
        cy.wait(250).then(() => {
          const endFrame = renderer.info?.render?.frame ?? 0;
          expect(endFrame).to.be.greaterThan(startFrame);
        });
      });
  });
});
