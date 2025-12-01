class AddProduct {

    //Add product to cart
    addProductToCart() {

        let subTotal = 0;
        let totalItem = 0

        cy.fixture("product-list").then((data) => {
            data.forEach((product) => {

                cy.contains(".wc-block-product", product.name)
                    .find(".wp-block-button__link")
                    .click()
                    .should("contain", "1 in cart");

                cy.wait(1000);

                subTotal = subTotal + product.price;
                totalItem = totalItem + 1;
            })

            subTotal = subTotal.toFixed(2);

            cy.get(".wc-block-mini-cart__button ").click();

            //Assert total item
            cy.get(".wc-block-mini-cart__title")
                .should("contain", totalItem + " items");

            //Assert total price
            cy.contains("Subtotal")
                .parent()
                .find(".wc-block-formatted-money-amount")
                .should("have.text", subTotal + "$");
        })
    }

}

export default AddProduct;