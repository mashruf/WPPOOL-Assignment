import FlexTableDashboard from "./navigateFlexTableDashboard.js";

//Creating object of FlexTableDashboard class
const dashoard = new FlexTableDashboard();

class CreateTable{

    //Create FlexTable using a Google Sheet URL, table title, and table description
    newTable(){
        
        dashoard.navigateDashboard();

        cy.contains(".btn","Create new table").click();

        cy.get("#sheet-url").type(Cypress.env("SHEET"));

        cy.contains(".btn","Create table from URL").click();

        cy.contains(".action-title","Connect your Google Sheet",{timeout:10000}).should("be.visible");

        cy.get("#table-name").type("{ctrl+a}").clear().type(Cypress.env("TABLE-NAME"));
        
        cy.get("#table-description").type("{ctrl+a}").clear().type(Cypress.env("TABLE-DESCRIPTION"));

        cy.contains(".table-action__save","Save changes").click();

        cy.contains(".Toastify__toast-body","Settings saved successfully.").should("be.visible");

        dashoard.navigateDashboard();

        dashoard.dasboardDisplayed();

    }

}

export default CreateTable;