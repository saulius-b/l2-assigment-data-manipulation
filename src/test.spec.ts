import { generateCustomerReport } from './index'
describe('Test outcome', () => {
	test('Check customer', () => {
		const result = {
			customer: { id: '85c9427f-950f-4936-bcd5-3ed9823c9900', firstName: 'Afton', lastName: 'Johnston' },
			items: [
				{
					customerId: '85c9427f-950f-4936-bcd5-3ed9823c9900',
					productId: '3092de5a-9923-430c-a274-eb0090b46575',
					quantity: 2,
					createdAt: '2021-06-26T12:58:18.891Z',
					id: '3092de5a-9923-430c-a274-eb0090b46575',
					product: 'Fish',
					price: 808,
				},
				{
					customerId: '85c9427f-950f-4936-bcd5-3ed9823c9900',
					productId: '5ca8ed17-ed3c-4d6a-a572-1aed0dda5fe9',
					quantity: 2,
					createdAt: '2021-08-03T02:16:45.018Z',
					id: '5ca8ed17-ed3c-4d6a-a572-1aed0dda5fe9',
					product: 'Bacon',
					price: 198,
				},
				{
					customerId: '85c9427f-950f-4936-bcd5-3ed9823c9900',
					productId: '5bd7cc9a-b4e8-4db8-880b-46c8e7ad2dc6',
					quantity: 2,
					createdAt: '2021-12-28T06:40:27.583Z',
					id: '5bd7cc9a-b4e8-4db8-880b-46c8e7ad2dc6',
					product: 'Hat',
					price: 418,
				},
			],
			total: 2848,
			byDay: { '2021-06-26': 1616, '2021-08-03': 396, '2021-12-28': 836 },
		}

		const reports = generateCustomerReport()

		expect(reports['85c9427f-950f-4936-bcd5-3ed9823c9900']).toEqual(result)
	})
})
