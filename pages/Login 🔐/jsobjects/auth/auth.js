export default {
	signIn: async () => {
		return sign_in.run()
			.then(async data => {
			feedback_event.run({
				'event': 'Sign In',
				'query': input_email_SignIn.text
			})
			storeValue('user_id', data.user.id)
			delete data.user;
			Object.keys(data).forEach(i => {
				storeValue(i, data[i]);
			});
		})
			.then(() => navigateTo('View Companies 💼🤝'))
			.catch((e) => {
				console.log(e)
				feedback_event.run({
					'event': 'Sign In',
					'query': input_email_SignIn.text,
					'success': 'false'
				})
			});
		
	},
	
	continue: async () => {
		if(!appsmith.URL.fullPath.includes('#access_token')) return;
		appsmith.URL.fullPath.split('#')[1].split('&').forEach(i => {
			const [key, value] = i.split('=');
			storeValue(key, value);
		});
		navigateTo('View Companies');
	}
}