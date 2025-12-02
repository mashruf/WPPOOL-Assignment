class OrderInHistory{

    //Assert: User's order appears in order history
    orderHistory(){

        cy.get("a").contains("My account").click();

        cy.get(".woocommerce-MyAccount-navigation")
            .contains("Orders").click();

        cy.get("[data-title='Order']",{timeout:10000}).first()
            .should("be.visible")
            .click();

        cy.get("h2").contains("Order details",{timeout:10000})
            .should("be.visible");

    }
}

export default OrderInHistory;