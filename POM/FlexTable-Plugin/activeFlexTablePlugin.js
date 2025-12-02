class PluginActivation {

    //Navigate to installed Plugins page
    installedPlugins() {

        cy.get("#menu-plugins").realHover();

        cy.get(".wp-first-item")
            .contains("Installed Plugins")
            .scrollIntoView()
            .click({ force: true });
    }

    //Search for the FlexTable plugin
    searchFlexTable() {
        cy.fixture("plugin-data").then((data) => {
            // Type the plugin name in the search input
            cy.get("#plugin-search-input").clear().type(data.name);

            // Try to find the plugin in the search results
            cy.get("body").then($body => {
                if ($body.find('.plugin-title:contains("' + data.name + '")').length > 0) {
                    // Plugin exists: activate it
                    cy.contains('.plugin-title', data.name).then(() => {
                        this.activate();
                        this.isActivated();
                    });
                } else {
                    // Plugin not found: install and activate
                    this.installAndActivate();
                    this.isActivated();
                }
            });
        });
    }

    //Install and Activate the FlexTable plugin
    installAndActivate() {

        cy.fixture("plugin-data").then((data) => {

            cy.get(".page-title-action").click();

            cy.get("#search-plugins", { timeout: 20000 }).type(data.name);

            cy.wait(5000);

            cy.contains(".plugin-card", data.name).parent().find("a").contains("Install Now",{timeout:60000}).click();

            cy.contains(".plugin-card", data.name).parent().find("a")
                .contains("Activate", { timeout: 60000 }).click();

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