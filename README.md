The function generateCustomerReports(): Record<string, CustomerReport> returns the CustomerReport and passes the jest tests.

Please note that the customer has to be selected manually ( const testCustomer ) from the customers array to successfully pass the jest tests.

CustomerReport contains
1. Customer info (Customer object with id, firstName, Lastname)
2. Receipts with product information (Items array with Item objects(customerId, productId, quantity, createdAt,	id, product, price)) 
3. total customer receipts sum
4. Receipt sum grouped by day (byDay object)

