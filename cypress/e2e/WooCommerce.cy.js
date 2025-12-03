/// <reference types="cypress" />

import Login from "../../POM/FlexTable-Plugin/login.js";
import AddProduct from "../../POM/WooCommerce/addProducts.js";
import Checkout from "../../POM/WooCommerce/checkout.js";
import Payment from "../../POM/WooCommerce/payment.js";
import OrderInBackend from "../../POM/WooCommerce/orderAppearsInBackend.js";
import UserLogin from "../../POM/WooCommerce/loginAsRegisteredUser.js";
import OrderInHistory from "../../POM/WooCommerce/orderInOrderHistory.js";

describe("Part B — WooCommerce Test Scenarios", () => {

    beforeEach("", () => {
        cy.visit(Cypress.env("SHOP"));
    })

    it("Test Case 1: A user completes the order.", () => {

        //creating object for Login class
        const login = new Login();

        //Creating object for AddProduct class
        const add = new AddProduct();

        //Creating object for Checkout class
        const chk = new Checkout();

        //Creating object for Payment class
        const payment = new Payment();

        //Creating object for OrderInBackend class
        const backend = new OrderInBackend();

        let totalProduct = 0;

        cy.fixture("product-list").then(data => {

            cy.url().should("eq", Cypress.env("SHOP"));

            data.forEach(() => {
                totalProduct = totalProduct + 1;
            })

            cy.get(".woocommerce-result-count").should("contain", totalProduct);

            //add product to cart
            add.addProductToCart();

            cy.get("button[aria-label='Close']").click();

            //checkout to place order
            chk.checkout();

            //Enter shipping info before payment
            payment.enterShippingInfo();

            //login to wp local
            login.loginToWpLocal();

            //Wp local dashboard is displayed
            login.displayDashboard();

            //navigate order list in backend
            backend.navigateOrderInBackend();

            //Assertion: order appears in backend
            backend.orderAppears();

        })
    })

    it("Test Case 2: Registered users can view their complete order history", () => {

        //creating object for Login class
        const login = new Login();

        //creating object for LoginAsRegisteredUser class for WooCommerce
        const user = new UserLogin();

        //Creating object for AddProduct class
        const add = new AddProduct();

        //Creating object for Checkout class
        const chk = new Checkout();

        //Creating object for Payment class
        const payment = new Payment();

        //Ceating object for OrderInHistory class
        const history = new OrderInHistory();

        //Creating object for OrderInBackend class
        const backend = new OrderInBackend();

        //login as a registered user
        user.LoginAsUser();

        //got to shop section
        cy.contains(".open-on-hover-click", "Shop").click();

        //Add product
        add.addProductToCart();

        cy.get("button[aria-label='Close']").click();

        //checkout
        chk.checkout();

        cy.contains("button","Place Order").click();

        cy.contains("h1","Order received",{timeout: 20000})
                .should("be.visible");

        
        
        //Assert: Registered User's order appears in order history     
        history.orderHistory();

        cy.get("#wp-admin-bar-site-name").realHover();
        cy.get("#wp-admin-bar-dashboard").click();

        //Assert: order appears in backend for registered user
        backend.navigateOrderInBackend();
        backend.orderAppearsRegisteredUser();

    })

})