export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log(state)
			console.log('Current state.items length %s', state.items.length);
      		console.log('Updating state.items length to %s', state.items.length + 1);
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			console.log(state)
			console.log('Initial state.items length: %s', state.items.length);
			return state;
	}
}
