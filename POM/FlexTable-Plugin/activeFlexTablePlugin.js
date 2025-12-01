class PluginActivation {

    //Navigate to installed Plugins page
    installedPlugins() {

        cy.get("#menu-plugins").realHover();

        cy.get(".wp-first-item")
            .contains("Installed Plugins")
            .scrollIntoView()
            .click({force:true});
    }

    //Search for the FlexTable plugin
    searchFlexTable() {

        cy.fixture("plugin-data").then((data) => {
            cy.get("body").then(body => {
                if (body.find("#plugin-search-input").length >= 1) {
                    cy.get("#plugin-search-input").type(data.name);
                    this.activate();
                    this.isActivated();
                }
                else {
                    this.installAndActivate();
                    this.isActivated();
                }
            })
        })

    }

    //Install and Activate the FlexTable plugin
    installAndActivate() {

        cy.fixture("plugin-data").then((data) => {

            cy.get(".page-title-action").click();

            cy.get("#search-plugins", { timeout: 5000 }).type(data.name);

            cy.contains(".plugin-card", data.name).parent().find("a").contains("Install Now").click();

            cy.contains(".plugin-card", data.name).parent().find("a")
                .contains("Activate", { timeout: 20000 }).click();

            this.isActivated();

        })

    }

    //Activate the FlexTable plugin from the installed plugins page
    activate() {

        cy.fixture("plugin-data").then((data) => {

            cy.contains(".plugin-title", data.name)
                .parent().find("a").then((link) => {
                    if (link.text().includes("Activate")) {
                        cy.contains(".plugin-title", data.name)
                            .parent().find("a").contains("Activate").click();
                    }
                })
        })
    }


    //Assertion: FlexTable plugin is active and visible under the WordPress Plugins list
    isActivated() {

        cy.fixture("plugin-data").then((data) => {

            cy.contains(".wp-menu-name", "Plugins").click();

            cy.contains(".plugin-title", data.name).should("be.visible");

            cy.contains(".plugin-title", data.name).
                parent().find("a")
                .contains("Deactivate").should("be.visible");

        })
    }
}

export default PluginActivation;