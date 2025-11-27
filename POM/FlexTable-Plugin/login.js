class Login{

    //Navigate to the WordPress login page
    visit(){
        cy.visit(Cypress.env("URL"));
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


}

export default Login;