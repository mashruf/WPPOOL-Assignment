/// <reference types="cypress" />
import Login from "../../POM/FlexTable-Plugin/login.js"

describe("Part A — FlexTable: Automation Test Cases",()=>{
    
    it("Test Case 1: Verify WordPress Login Functionality",()=>{
        
        //creating object for the Login class
        const login = new Login();
        
        //Navigate to the WordPress login page
        login.visit();

        //Enter valid username and password
        login.userName();
        login.passWord();
        
        //Click the Log In button
        login.loginButton();

        //Assertion: User is redirected to the WordPress Dashboard without errors
        cy.get(".wrap").should("contain","Dashboard");
    })

})