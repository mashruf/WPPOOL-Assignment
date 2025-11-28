class Login{

    //Navigate to the WordPress login page
    visit(){

        cy.visit("http://wppool-assignment.local/wp-admin/");
    }

    //Type username
    userName(){

        cy.get("#user_login").type(Cypress.env("USERNAME"));
    }

    //Type password
    passWord(){

        cy.get("#user_pass").type(Cypress.env("PASSWORD"));
    }

    //Click login button
    loginButton(){

        cy.get("#wp-submit").click();
    }

    //Assertion: User is redirected to the WordPress Dashboard without errors
    displayDashboard(){
        
        cy.get(".wrap").should("contain","Dashboard");
    }


}

export default Login;