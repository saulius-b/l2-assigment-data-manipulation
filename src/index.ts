import customers from './data/customers.json'
import products from './data/products.json'
import receipts from './data/receipts.json'
import { ByDay, Customer, CustomerReport, Item, Product } from './models/models'

export function generateCustomerReport(): Record<string, CustomerReport> {

	//Customer for the test
	const testCustomer = customers[14]

	//Getting customer info
	const customer: Customer = { id: testCustomer.id, firstName: testCustomer.firstName, lastName: testCustomer.lastName }

	//Getting the customer receipt data with customerId
	const customerReceipts = receipts.filter(item => item.customerId === customer.id);

	//Getting the customer item objects and sorting them by date
	const items = []

	for (const element of customerReceipts) {

		const customerProduct = products.filter(item => item.id === element.productId)

		const item: Item = {
			customerId: element.customerId,
			productId: element.productId,
			quantity: element.quantity,
			createdAt: element.createdAt,
			id: customerProduct[0].id,
			product: customerProduct[0].product,
			price: parseInt(customerProduct[0].price)
		}

		items.push(item)
	}

	items.sort((x, y) => +new Date(x.createdAt) - +new Date(y.createdAt));

	//Getting total price
	const total = items.reduce((accum, item) => accum + (item.price * item.quantity), 0)

	//Creating byDay object
	const dates = items.map(item => item.createdAt.split('T')[0])
	const prices = items.map(item => item.price * item.quantity)

	const byDay: ByDay = {}

	dates.forEach((item, index) => {
		
		byDay[item] = prices[index]

	});

	//CustomerReport variable
	const customerReport: CustomerReport = {
		customer,
		items,
		total,
		byDay
	}

	//Result variable to be returned
	const result: Record<string, CustomerReport> = {
		[customer.id]: customerReport
	}

	return result
}