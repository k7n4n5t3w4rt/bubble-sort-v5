describe("Landing page", () => {
    it("shows all bubble-sort parameter sliders", () => {
        cy.visit("/");

        // Sliders come from `js/three-bubble-sort/ThreeBubbleSortParams.js`
        cy.get('input[type="range"]#cols').should("be.visible");
        cy.get('input[type="range"]#rows').should("be.visible");
        cy.get('input[type="range"]#speed').should("be.visible");
        cy.get('input[type="range"]#scaleX').should("be.visible");
        cy.get('input[type="range"]#scaleY').should("be.visible");
        cy.get('input[type="range"]#scaleZ').should("be.visible");
    });
});


