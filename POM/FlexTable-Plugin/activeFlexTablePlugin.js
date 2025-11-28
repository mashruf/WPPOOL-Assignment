class PluginActivation{

    //Navigate to installed Plugins page
    installedPlugins(){
        cy.get("#menu-plugins").realHover();
        
        cy.get(".wp-first-item").contains("Installed Plugins").click();
    }

    //Search for the FlexTable plugin
    searchFlexTable(){

        cy.get("body").then(body=>{
            if(body.find("#plugin-search-input").length>=1){
                cy.get("#plugin-search-input").type("FlexTable");
                this.activate();
                this.isActivated();
            }
            else{
                this.installAndActivate();
                this.isActivated();
            }
        })
    }

    //Install and Activate the FlexTable plugin
    installAndActivate(){
        
        cy.get(".page-title-action").click();
        
        cy.get("#search-plugins",{timeout:5000}).type("FlexTable");
        
        cy.contains(".plugin-card", "FlexTable").parent().find("a").contains("Install Now").click();
        
        cy.contains(".plugin-card", "FlexTable").parent().find("a")
        .contains("Activate",{timeout:20000}).click();

        this.isActivated();
        
    }

    //Activate the FlexTable plugin from the installed plugins page
    activate(){

        cy.contains(".plugin-title","FlexTable")
        .parent().find("a").then((link)=>{
            if(link.text().includes("Activate")){
                cy.contains(".plugin-title","FlexTable")
                .parent().find("a").contains("Activate").click();
            }
        })
    }


    //Assertion: FlexTable plugin is active and visible under the WordPress Plugins list
    isActivated(){
        cy.contains(".wp-menu-name","Plugins").click();

        cy.contains(".plugin-title","FlexTable").should("be.visible");

        cy.contains(".plugin-title","FlexTable").
        parent().find("a")
        .contains("Deactivate").should("be.visible");

    }
}

export default PluginActivation;