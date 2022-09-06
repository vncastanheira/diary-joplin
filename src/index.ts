import joplin from 'api';
joplin.plugins.register({
	onStart: async function() {
		// await joplin.commands.execute('newFolder')

		var folders = await joplin.data.get(['folders'])
		var diaryFolders = folders.items.filter(f => f.title === 'Diary');
		if(diaryFolders.length > 0){
			console.log('Diary folder already exists.')
		}
		else {
			console.log('Diary folder created.')
			await joplin.data.post(['folders'], null, 
			{
				title: 'Diary'
			})
		}

		await joplin.commands.execute('openFolder')
	},
});
