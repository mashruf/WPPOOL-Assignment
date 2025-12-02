# WPPOOL QA Engineer Assignment

## About
This project showcase the automation testing of FlexTable 
Plugin and WooCommerce checkout flow.

## Features Tested
- FlexTable Plugin
  - Login Functionality
  - Plugin Install
  - Plugin Activation
  - Create table with google sheet
  - Create Page using the shortcode of a table
  - Table customization, Table deletion
 - WooCommerce Checkout
   - End-to-End Checkout Flow
   - User Account Order History

## Project Structure
```
WPPOOL-Assignment/
├── POM/
│   ├── FlexTable-Plugin/
│   └── WooCommerce/
├── cypress.config.js
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
├── example.cypress.env.json
├── package-lock.json
└── package.json
```

## Software Used
- Node.js v22.18.0
- Cypress v15.7.0
- Google Chrome

## Test Cases
![WPPOOL Test cases - Sheet1 (2)_page-0001](https://github.com/user-attachments/assets/af07118b-3969-4253-b620-cce89c984707)

## Credentials and data
- Rename **example.cypress.env.json** to **cypress.env.json**. Enter your credentials on the file.
- All the demo test data will be found on the **fixture** folder. Edit the json files to use your data.

## Installation And Dependencies
- Clone or download the prototype
- Open the project with code editor
- Open terminal in the project folder
- Run following commands
```
npm install
```

## Run Test
- Run test in Cypress GUI
```
npx cypress open
```
- Run test and generate report
```
npx cypress run
```

## Report
<img width="1920" height="1321" alt="screencapture-127-0-0-1-5500-cypress-reports-html-index-html-2025-12-02-19_28_42" src="https://github.com/user-attachments/assets/d39de3e9-671f-4198-a18c-cd41eb593a92" />



