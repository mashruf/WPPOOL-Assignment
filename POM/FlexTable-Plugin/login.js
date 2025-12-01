class Login{

    //Navigate to the WordPress login page
    loginToWpLocal(){

        
        cy.visit("http://wppool-assignment.local/wp-admin/");
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