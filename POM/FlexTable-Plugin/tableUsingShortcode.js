import FlexTableDashboard from "./navigateFlexTableDashboard.js";

//Creating object for FlexTableDashboard class
const dashboard = new FlexTableDashboard();

class TableWithShortcode {

    //Copying short code and creating a page with it
    createPageWithShortcode() {

        cy.fixture("page-data").then((page) => {
            cy.fixture("table-data").then((table) => {
                //navigating to flextable dashboard
                dashboard.navigateFlexTableDashboard();

                //Copying the shortcode 
                cy.contains(".table_info-action_box", table.name, { timeout: 10000 })
                    .find(".copy-shortcode")
                    .invoke("text").then((code) => {

                        let ShortCode = code.replace("=", " id=");

                        //Navigate to Add page
                        cy.contains(".wp-menu-name", "Pages").realHover();
                        cy.get(".wp-submenu").contains("Add Page").click({ force: true });
                        cy.get(".components-modal__header", { timeout: 10000 })
                            .parent().find(".components-button")
                            .should("be.visible").click();

                        // Adding title and pasting short code
                        cy.get("h1[role='textbox']").type(page.title);
                        cy.get("button[aria-label='Add block']").click();
                        cy.get("input[placeholder='Search']").type("shortcode");
                        cy.get("div[role='listbox']").contains("Shortcode").click();
                        cy.get(".components-placeholder").find("textarea")
                            .type(ShortCode, { parseSpecialCharSequences: false, delay: 50 });

                        //Publishing page
                        cy.contains("button[type='button']", "Publish").click();
                        cy.get(".editor-post-publish-panel")
                            .find("button[type='button']")
                            .contains("Publish")
                            .click();
                        
                        //navigate to frontend page
                        cy.get(".editor-post-publish-panel")
                            .contains("View Page")
                            .click();

                        //Assertion: frontend page is visible
                        cy.get("table",{timeout: 10000}).should("be.visible");
                    })
            })


        })

        

    }

}

export default TableWithShortcode;