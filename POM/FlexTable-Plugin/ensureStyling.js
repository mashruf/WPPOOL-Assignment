import CustomizeTable from "./customizeTable.js";
import VisitFrontEndTable from "./navigateFrontEndTable.js";

//Creating object for CustomizeTable class
const customize = new CustomizeTable();

//creating object for VisitFrontEndTable class
const frontEnd = new VisitFrontEndTable();

class Styling{

    //select random value for row in a page and table height
    setRowsAndHeight(){

        //generate random row and height
        const rows = ["1","5","10","15","30","50"];
        const height = ["400px","500px","600px","700px","800px","900px","1000px"];

        let random_row = rows[Math.floor(Math.random()*rows.length)];
        let random_height = height[Math.floor(Math.random()*rows.length)];

        customize.navigateTableCustomization();

        cy.get(".table-customization-tab-wrap").contains("Styling").click();

        //selecting random row
        cy.get("#rows-per-page").select(random_row);

        //selecting random height
        cy.get("#table_height").select(random_height);

        
        cy.contains("button","Save changes").click();
        cy.contains(".Toastify__toast-body", "Settings saved successfully.")
            .should("be.visible");

        frontEnd.visit();

        //Assertion: rows and height are correct
        cy.get("#create_tables_length").should("contain",random_row);

        cy.get(".dataTables_scrollBody")
            .invoke("css", "height")
            .should("equal", random_height);
    
    }
}

export default Styling;