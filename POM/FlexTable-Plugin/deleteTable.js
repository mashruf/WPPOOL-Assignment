import FlexTableDashboard from "./navigateFlexTableDashboard.js";
import VisitFrontEndTable from "./navigateFrontEndTable.js";

//creating object for FlexTableDashboard class
const dashboard = new FlexTableDashboard();

//creating object for VisitFrontEndTable class
const frontEnd = new VisitFrontEndTable();

class DeleteTable {

    //Delete the table and verify
    delete() {

        cy.fixture("table-data").then((table) => {

                dashboard.navigateFlexTableDashboard();

                cy.contains(".table_info-action_box", table.name, { timeout: 10000 })
                    .find(".table-delete")
                    .should("be.visible")
                    .click();

                //click delete button
                cy.get(".delete-table-modal", { timeout: 10000 }).should("be.visible");
                cy.get(".confirm-button").click();

                frontEnd.visit(false);
                cy.contains("table").should("not.exist");
                cy.get("h5").should("contain","Table maybe deleted or can’t be loaded.");

        })

    }
}

export default DeleteTable;