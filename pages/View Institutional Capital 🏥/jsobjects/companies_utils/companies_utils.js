export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async refreshCompanyTable (search, status) {
		grabCompanyCount.run({"company": search_companies.text}).then(() => 
			feedback_event.run({
				'event': 'Search',
				'query': (search || "") + (search && status ? " | " : "") + (status || ""),
				'success': grabCompanyCount.data[0].count > 0 ? 'true' : 'false'
			})
		)
		grabAssetManagers.run({"company": search_companies.text})
	}
}