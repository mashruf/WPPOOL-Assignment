class Payment{
    
    //Enter shipping info before payment
    enterShippingInfo(){
        cy.fixture("customer-info").then(customer=>{
            
            cy.get("#email").type(customer.email);
            cy.get("#shipping-first_name").type(customer.firstName);
            cy.get("#shipping-last_name").type(customer.lastName);
            cy.get("#shipping-address_1").type(customer.address);
            cy.get("#shipping-city").type(customer.city);
            cy.get("button").contains("Place Order").click();

            cy.contains("h1","Order received",{timeout: 20000})
                .should("be.visible");
        })
    }
}

export default Payment;
