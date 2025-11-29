import FlexTableDashboard from "./navigateFlexTableDashboard.js";

//Creating object of FlexTableDashboard class
const dashboard = new FlexTableDashboard();

class CreateTable {

    //Create FlexTable using a Google Sheet URL, table title, and table description
    newTable() {

        cy.fixture("table-data").then((data) => {

            //navigate to flextable dashboard
            dashboard.navigateFlexTableDashboard();

            cy.contains(".btn", "Create new table").click();

            cy.get("#sheet-url").type(data.sheet);

            cy.contains(".btn", "Create table from URL").click();

            cy.contains(".action-title", "Connect your Google Sheet", { timeout: 10000 })
                .should("be.visible");

            cy.get("#table-name").type("{ctrl+a}")
            .clear()
            .type(data.name);

            cy.get("#table-description").type("{ctrl+a}").clear().type(data.description);

            cy.contains(".table-action__save", "Save changes").click();

            cy.contains(".Toastify__toast-body", "Settings saved successfully.")
            .should("be.visible");

            dashboard.navigateFlexTableDashboard();

            dashboard.dasboardDisplayed();
        })
    }
}

export default CreateTable;