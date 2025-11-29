class FlexTableDashboard{

    //Navigate to FlexTable Dashboard
    navigateFlexTableDashboard(){

        cy.fixture("plugin-data").then((data)=>{
            cy.contains(".wp-menu-name",data.name).click();
        })      
    }

    //Assertion: FlexTable Dashboard UI is displayed without errors
    dasboardDisplayed(){
        
        cy.contains("h5","All Tables").should("be.visible");
    }
}


export default FlexTableDashboard;