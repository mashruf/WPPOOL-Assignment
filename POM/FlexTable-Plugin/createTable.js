import FlexTableDashboard from "./navigateFlexTableDashboard.js";

//Creating object of FlexTableDashboard class
const dashboard = new FlexTableDashboard();

class CreateTable{

    //Create FlexTable using a Google Sheet URL, table title, and table description
    newTable(){
        
        dashboard.navigateDashboard();

        cy.contains(".btn","Create new table").click();

        cy.get("#sheet-url").type("https://docs.google.com/spreadsheets/d/11qRH9xUuglOTIZa7JnWTVBYuGMT32ZhFuJ5_xypApGM/edit?gid=0#gid=0");
    
        cy.contains(".btn","Create table from URL").click();

        cy.contains(".action-title","Connect your Google Sheet",{timeout:10000}).should("be.visible");

        cy.get("#table-name").type("{ctrl+a}").clear().type("Sample table");
        
        cy.get("#table-description").type("{ctrl+a}").clear().type("Table for WPPOOL assignment");
        
        cy.contains(".table-action__save","Save changes").click();

        cy.contains(".Toastify__toast-body","Settings saved successfully.").should("be.visible");

        dashboard.navigateDashboard();

        dashboard.dasboardDisplayed();

    }

}

export default CreateTable;