import CustomizeTable from "./customizeTable.js";
import VisitFrontEndTable from "./navigateFrontEndTable.js";

//Creating object of CustomizeTable class
const customize = new CustomizeTable();

class ShowEntryInfoAndPagination{

    //Enable entry info and pagination
    enableEntryInfoAndPagination(){

        customize.navigateTableCustomization();

        //  if the checkbox already checked
        //  then it will uncheck and then check
        cy.get("#hide-entry-info").then((chk)=>{
            if(chk.is(":checked")){
                cy.wrap(chk).uncheck().check();
            }
            else{
                cy.wrap(chk).check();
            }
        })

        //  if the checkbox already checked
        //  then it will uncheck and then check
        cy.get("#hide-pagination").then((chk)=>{
            if(chk.is(":checked")){
                cy.wrap(chk).uncheck().check();
            }
            else{
                cy.wrap(chk).check();
            }
        })

        cy.contains("button","Save changes").click();

        cy.contains(".Toastify__toast-body", "Settings saved successfully.")
            .should("be.visible");

        
    }

    //Assertion: entry info, pagination, layout
    entryInfoPaginationLayout(){

        //creating object for VisitFrontEndTable class
        const frontEnd = new VisitFrontEndTable();

        frontEnd.visit();

        //Entry info
        cy.get("#create_tables_info")
            .should("be.visible")
            .and("contain","Showing 1 to 10 of 15 entries");
        
        
        //Pagination is visible
        cy.get(".pagination")
            .should("be.visible");

            //Table layout displayed correctly for page 1
            cy.get(".gswpts_rows").should("have.length",10);

            //Previous button disable
            cy.get("#create_tables_previous").should("have.class","disabled");
                //button 1 is active
                cy.get(".paginate_button").contains("1").should("have.class","active");

        //click button 2
        cy.get(".paginate_button").contains("2").click();
            //entry info for button 2
            cy.get("#create_tables_info")
                .should("be.visible")
                .and("contain","Showing 11 to 15 of 15 entries");

            //button 2 is active
            cy.get(".paginate_button").contains("2").should("have.class","active");
                //Next button is disable
                cy.get("#create_tables_next").should("have.class","disabled");

            //Table layout displayed correctly for page 2
            cy.get(".gswpts_rows").should("have.length",5);

        //click button 1
        cy.get(".paginate_button").contains("1").click();
            //entry info for button 1
            cy.get("#create_tables_info")
                .should("be.visible")
                .and("contain","Showing 1 to 10 of 15 entries");

            //button 1 is active
            cy.get(".paginate_button").contains("1").should("have.class","active");
                //Previous button is disable
                cy.get("#create_tables_previous").should("have.class","disabled");

                //Table layout displayed correctly for page 1
                cy.get(".gswpts_rows").should("have.length",10);
    }

}

export default ShowEntryInfoAndPagination;