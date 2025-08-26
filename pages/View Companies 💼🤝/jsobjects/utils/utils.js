export default {
	doNothing: () => {
		// Do Nothing
	},

	signOut: async () => {
		clearStore('token', null).then(() => navigateTo('Login 🔐'));
	},

	loanStatusColor: (status) => {
		if (status === 'Approved') {
			return 'RGB(0, 128, 0)'
		}
		if (status === 'Rejected') {
			return 'RGB(255, 0, 0)'
		}
		return 'RGB(255, 165, 0)';
	}
}