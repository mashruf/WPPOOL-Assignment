class UserLogin{

    //login as a registered user in WooCommerce
    LoginAsUser(){

        cy.get(".wp-block-woocommerce-customer-account").click();

        cy.contains("h1","My account",{timeout: 10000}).should("be.visible");

        cy.get("#username").type(Cypress.env("USERNAME"));
        cy.get("#password").type(Cypress.env("PASSWORD"));
        cy.contains("button","Log in").click();

        cy.contains("h1","My account",{timeout:10000}).should("be.visible");

    }

}

export default UserLogin;