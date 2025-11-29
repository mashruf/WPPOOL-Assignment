class VisitFrontEndTable{

    //Navigate to the frontend table
    visit(){

        cy.fixture("page-data").then((data)=>{
            
            cy.contains(".wp-menu-name", "Pages").realHover();
            cy.get(".wp-submenu").contains("All Pages").click({ force: true });

            cy.contains(".iedit",data.title,{timeout:10000})
                .should("be.visible")
                .realHover()
                .find(".view")
                .click();
        })
    }
}

export default VisitFrontEndTable;