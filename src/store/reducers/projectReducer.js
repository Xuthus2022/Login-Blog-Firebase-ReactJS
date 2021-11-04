const initState = {
	projects: [
		{id:'1', title: 'help me find the peach', content: 'blah blah blah'},
		{id:'2', title: 'SAM IS THE MAN', content: 'blah blah blah'},
		{id:'3', title: 'WORLD NEWS, covid is amoung us', content: 'blah blah blah'},
	],
}

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR' :
			console.log('created project error', action.err);
			return state;
		default:
			return state;
	}
}
export default projectReducer
