class Login{

    //Navigate to the WordPress login page
    visit(){
        cy.visit(Cypress.env("URL"));
    }

    //Usernamr locator
    userName(){
        return cy.get("#user_login");
    }

    //Password locator
    passWord(){
        return cy.get("#user_pass");
    }

    //Login button locator
    loginButton(){
        return cy.get("#wp-submit");
    }


}

export default Login;