const { createApp } = Vue;

createApp({
	data() {
		return {
			title: 'To-Do List',
			apiURL: 'server.php',
			list: [],
			newTask: ''
		}
	},
	methods: {

		getList(){
			axios.get(this.apiURL)
			.then(result => {
				this.list = result.data;
			})
		},

		addTask(){
			const data = new FormData();
			data.append('newTaskItem', this.newTask);
			axios.post(this.apiURL, data)
			.then(result => {
				this.list = result.data;
				this.newTask = '';
			})
		},

		removeTask(index){
			const data = new FormData();
			data.append('taskToRemove', index);
			axios.post(this.apiURL, data)
			.then(result => {
				this.list = result.data;
			
			})
		}
	},
	mounted() {
		this.getList();
	}
}).mount('#app');