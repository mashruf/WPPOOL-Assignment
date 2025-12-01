/// <reference types="cypress" />

import Login from "../../POM/FlexTable-Plugin/login.js";
import AddProduct from "../../POM/WooCommerce/addProducts.js";
import Checkout from "../../POM/WooCommerce/checkout.js";
import Payment from "../../POM/WooCommerce/payment.js";
import OrderInBackend from "../../POM/WooCommerce/orderAppearsInBackend.js";

describe("Part B — WooCommerce Test Scenarios",()=>{

    beforeEach("",()=>{
        cy.visit("http://wppool-assignment.local/shop/");
    })

    it("Test Case 1: Verify WooCommerce site is up",()=>{
        
        let totalProduct = 0;

        cy.fixture("product-list").then(data=>{
            
            cy.url().should("eq","http://wppool-assignment.local/shop/");
            
            data.forEach(()=>{
                totalProduct = totalProduct + 1;
            })
            
            cy.get(".woocommerce-result-count").should("contain", totalProduct);
        })
    })

    it("Test Case 2: Verify Add Product To Cart functionality",()=>{

        //Creating object for AddProduct class
        const add = new AddProduct();

        //Add product to cart
        add.addProductToCart();
    })

    it("Test Case 3: Verify Checkout functionality",()=>{
        
        //Creating object for AddProduct class
        const add = new AddProduct();

        //Creating object for Checkout class
        const chk = new Checkout();

        //add product to cart
        add.addProductToCart();

        cy.get("button[aria-label='Close']").click();

        //checkout to place order
        chk.checkout();
    })

    it("Test Case 4: Verify Payment functionality",()=>{
        
        //Creating object for AddProduct class
        const add = new AddProduct();

        //Creating object for Checkout class
        const chk = new Checkout();

        //Creating object for Payment class
        const payment = new Payment();
        
        //add product to cart
        add.addProductToCart();

        cy.get("button[aria-label='Close']").click();

        //checkout to place order
        chk.checkout();

        //Enter shipping info before payment
        payment.enterShippingInfo();
    })

    it("Test Case 5: Verify Order appears in WooCommerce backend",()=>{
        
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