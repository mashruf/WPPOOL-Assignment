class VisitFrontEndTable {

    //Navigate to the frontend table
    visit(assert) {

        cy.fixture("page-data").then((page) => {
            cy.fixture("table-data").then((table) => {

                cy.contains(".wp-menu-name", "Pages").realHover();
                cy.get(".wp-submenu").contains("All Pages").click({ force: true });

                cy.contains(".iedit", page.title, { timeout: 10000 })
                    .should("be.visible")
                    .realHover()
                    .find(".view")
                    .click();

                if(assert!=false){
                    cy.contains(table.name, { timeout: 10000 }).should("be.visible");
                }
                else{
                    cy.log("table deleted");
                }

            })

        })
    }
}

export default VisitFrontEndTable;





