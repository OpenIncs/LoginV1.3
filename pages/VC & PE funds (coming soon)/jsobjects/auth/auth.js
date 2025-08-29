export default {
	async checkLogin() {
		const res = await fetch('https://iuloumxlntlyctvqxwss.supabase.co/auth/v1/user', {
			"method": "GET",
			"headers": {
				"apikey": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bG91bXhsbnRseWN0dnF4d3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxMDYxMTMsImV4cCI6MjA2NzY4MjExM30.9Y6zAStqXiIkpA6CrAjid727I6oVlH9LvsHD_fgBVo4',
				"Authorization": "Bearer "+appsmith.store.access_token
			}
		})
		if (!appsmith.store.user_id || !appsmith.store.access_token || !res.ok) {
			navigateTo('Login 🔐')
		}
	},
	test() {
		storeValue('access_token', 'abc123')
	}
}