describe("3D Start button", () => {
  it("shows START and initializes the 3D scene when clicked", () => {
    // Force "no AR support" so the normal START button is shown even if the
    // runner/environment injects a WebXR shim.
    cy.visit("/", {
      onBeforeLoad(win) {
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

    // The normal (non-AR) start button is injected into #dom-overlay.
    cy.get("#start-button").should("be.visible").and("contain.text", "START");

    // The render container is only created once a scene starts.
    cy.get("#ar-container").should("not.exist");

    cy.get("#start-button").click();

    // Renderer container should now exist.
    cy.get("#ar-container").should("exist");

    // Confirm renderer is created and its canvas is mounted (Stats also injects canvases,
    // so we avoid counting canvases in the container).
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

