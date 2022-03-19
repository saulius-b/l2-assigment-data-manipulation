# Introduction

In the real world, we probably would use SQL database, but this is the test that will challenge your javascript skills.
This test is designed to check your ability to manipulate datasets, execute common operations like sorting, grouping, mapping, reducing, ect and asserts your knowledge about data structures

In this assignment you can use any libraries that you want. BONUS Point if you don't use anything

You will receive access to github repository please fork repository and implement provided test

# Setup
```
$ npm install
```

# Run tests
```
$ npm run test
```

# Objective

In folder `src/data` you will find 3 data sets

1. Customers
2. Products
3. Receipts

Your task is to write generateCustomerReports function and successfully pass all jest tests.

generateCustomerReports function will take data from `./data` folder and generates customer reports

CustomerReport contains
1. customer info (firstName, lastName, id)
2. receipts with product information
3. receipt sum grouped by day
4. total customer receipts sum

Following function output
generateCustomerReports(): Record<string, CustomerReport>