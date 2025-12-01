class Checkout{

    //Checkout for order placement
    checkout() {
        cy.fixture("product-list").then((data) => {

            let totalAmount = 0;

            data.forEach((product)=>{
                totalAmount = totalAmount + product.price;
            })

            let finalAmount = Number(totalAmount + (totalAmount * (5 / 100)) + 120).toFixed(2);

            cy.log(finalAmount);

            cy.contains("a", "Checkout").click();

            cy.contains("p", "Order summary").should("be.visible");

            cy.get(".wc-block-components-totals-wrapper")
                .contains(finalAmount + "$")
                .should("be.visible");
        })
    }
}

export default Checkout;