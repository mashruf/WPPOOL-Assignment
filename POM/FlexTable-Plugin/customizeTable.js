import FlexTableDashboard from "./navigateFlexTableDashboard.js";
import VisitFrontEndTable from "./navigateFrontEndTable.js";

//Creating object for FlexTableDashboard class
const dashboard = new FlexTableDashboard();

//Creating object for VisitFrontEndTable class
const frontEnd = new VisitFrontEndTable();

class CustomizeTable{

    //navigate to table customization
    navigateTableCustomization(){

        cy.fixture("table-data").then((data)=>{
            
            //navigate flextable dashboard
            dashboard.navigateFlexTableDashboard();

            //click edit table
            cy.contains(data.name, { timeout: 10000 })
                    .should("be.visible")
                    .click();
            
            cy.contains("Table customization",{timeout:10000})
                    .scrollIntoView()
                    .should("exist")
                    .click();
        })
        
    }

    //customize table
    applyChanges(){

        cy.contains("Show Table title").scrollIntoView()
            
        //  if the checkbox already checked
        //  then it will uncheck and then check
        cy.get("#show-title").then((chk)=>{
            if(chk.is(":checked")){
                cy.wrap(chk).uncheck().check();
            }
            else{
                cy.wrap(chk).check();
            }
        })
            
        //  if the checkbox already checked
        //  then it will uncheck and then check
        cy.get("#show-description").then((chk)=>{
            if(chk.is(":checked")){
                cy.wrap(chk).uncheck().check();
            }
            else{
                cy.wrap(chk).check();
            }
        });

        cy.get("#description-position").select("below");
        
        cy.contains("button","Save changes").scrollIntoView().click();

        cy.contains(".Toastify__toast-body", "Settings saved successfully.")
            .should("be.visible");

    }

    //Verify the changes
    assertChanges(){

        cy.fixture("table-data").then((data)=>{

            frontEnd.visit();

            cy.get("#swptls-table-title").then((title)=>{
                expect(title).to.be.contain(data.name);
            })

            cy.get("#swptls-table-description").scrollIntoView();

            cy.get("#swptls-table-description").then((desc)=>{
                expect(desc).to.be.contain(data.description);
            })

        })
        


    }

}

export default CustomizeTable;