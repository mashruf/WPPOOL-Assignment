class Login{

    //Navigate to the WordPress login page
    loginToWpLocal(){

        
        cy.visit(Cypress.env("URL"));
        cy.wait(2000);
        cy.get("#user_login").type(Cypress.env("USERNAME"));
        cy.get("#user_pass").type(Cypress.env("PASSWORD"));
        cy.get("#wp-submit").click();
            
    }

    //Assertion: User is redirected to the WordPress Dashboard without errors
    displayDashboard(){
        
        cy.get(".wrap").should("contain","Dashboard");
    }


}

export default Login;