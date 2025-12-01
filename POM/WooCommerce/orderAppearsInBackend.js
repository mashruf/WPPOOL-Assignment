class OrderInBackend {

    //login to wp local
    navigateOrderInBackend() {
        cy.get(".wp-menu-name").realHover();
        cy.get(".wp-submenu").contains("Orders").click({ force: true });

        cy.get("h1").contains("Orders", { timeout: 10000 }).should("be.visible");

    }

    //Assert: order appears in backend
    orderAppears() {

        let subTotal = 0;

        cy.fixture("customer-info").then(customer => {
            cy.fixture("product-list").then(data => {
                data.forEach(product => {
                    subTotal = subTotal + product.price;
                })
                
                let total = Number(subTotal + (subTotal * (5 / 100)) + 120).toFixed(2);

                let customerName = customer.firstName + " " + customer.lastName;

                cy.get("#the-list").should("contain", customerName);
                cy.get("#the-list").should("contain", total + "$");
            })

        })
    }

}

export default OrderInBackend;