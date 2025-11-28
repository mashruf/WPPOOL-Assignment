class FlexTableDashboard{

    //Navigate to FlexTable Dashboard
    navigateDashboard(){
        cy.contains(".wp-menu-name","FlexTable").click();
    }

    //Assertion: FlexTable Dashboard UI is displayed without errors
    dasboardDisplayed(){
        cy.contains("h5","All Tables").should("be.visible");
    }
}


export default FlexTableDashboard;