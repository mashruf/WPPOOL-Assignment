/// <reference types="cypress" />

import Login from "../../POM/FlexTable-Plugin/login.js"
import PluginActivation from "../../POM/FlexTable-Plugin/activeFlexTablePlugin.js";
import FlexTableDashboard from "../../POM/FlexTable-Plugin/navigateFlexTableDashboard.js";
import CreateTable from "../../POM/FlexTable-Plugin/createTable.js";
import TableWithShortcode from "../../POM/FlexTable-Plugin/tableUsingShortcode.js";
import CustomizeTable from "../../POM/FlexTable-Plugin/customizeTable.js";
import ShowEntryInfoAndPagination from "../../POM/FlexTable-Plugin/entryInfoAndPagination.js";

describe("Part A — FlexTable: Automation Test Cases", () => {

    beforeEach("", () => {

        //creating object for the Login class
        const login = new Login();

        //Navigate to the WordPress login page
        login.visit();

        //Wait 3 seconds after login page visible
        cy.url().should("contain", "wp-login");

        //Enter valid username and password
        login.userName();
        login.passWord();

        //Click the Log In button
        login.loginButton();
    })

    it("Test Case 1: Verify WordPress Login Functionality", () => {

        //creating object for the Login class
        const login = new Login();

        //Assertion: User is redirected to the WordPress Dashboard without errors
        login.displayDashboard()
    })

    it("Test Case 2: Verify FlexTable Plugin Activation Status", () => {

        //Creating object for the ActivePlugin class
        const plugin = new PluginActivation();

        //Navigate to Installed Plugins
        plugin.installedPlugins();

        //Search the FlexTable in the Installed Plugins page
        //FlexTable will be installed and activated if it is not available
        plugin.searchFlexTable();
    })

    it("Test Case 3: Navigate to FlexTable Dashboard", () => {

        //Creating object of FlexTableDashboard class
        const dashboard = new FlexTableDashboard();

        //Navigate to FlexTable Dashboard
        dashboard.navigateFlexTableDashboard();

        ////Assertion: FlexTable Dashboard UI is displayed without errors
        dashboard.dasboardDisplayed();
    })

    it("Test Case 4: Create a New Table Using Google Sheet Input", () => {

        //Creating object of CreateTable class
        const table = new CreateTable();

        //Create FlexTable using a Google Sheet URL, table title, and table description
        table.newTable();
    })

    it("Test Case 5: Verify Table Display Using Shortcode", () => {
        //Creating object for TableWithShortcode class
        const page = new TableWithShortcode();

        //Copying short code and creating a page with it
        page.createPageWithShortcode();
    })

    it("Test Case 6: Enable 'Show Table Title' and 'Show Table Description Below Table",()=>{

        //creating object for CustomizeTable class
        const customizeTable = new CustomizeTable();

        //navigate to table customization
        customizeTable.navigateTableCustomization();

        //Apply changes
        customizeTable.applyChanges();

        //verify changes
        customizeTable.assertChanges();

    })

    it.only("Test Case 7: Enable Entry Info & Pagination",()=>{

        //creating object for ShowEntryInfoAndPagination class
        const entryInfoAndPagi = new ShowEntryInfoAndPagination();
         
        //Enable entry info and pagination
        entryInfoAndPagi.enableEntryInfoAndPagination();

        //Assertion: entry info, pagination, layout
        entryInfoAndPagi.entryInfoPaginationLayout();

        




    })

})