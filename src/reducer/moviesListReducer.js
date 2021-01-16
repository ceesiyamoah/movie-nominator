import {
	ADD_NOMINATION,
	CLEAR_NOMINATIONS,
	EDIT_TERM,
	GET_MOVIES,
	REMOVE_NOMINATION,
	RETRIEVE_NOMINATIONS,
	CLEAR_NOTIFICATION,
	SAVE_NOMINATIONS,
	NOMINATION_LIST_FULL,
} from './../actions/types';

const moviesListReducer = (
	state = {
		movieList: [],
		searchTerm: '',
		nominationList: [],
		notification: '',
	},
	{ type, payload }
) => {
	switch (type) {
		case GET_MOVIES:
			return { ...state, movieList: payload };
		case EDIT_TERM:
			return { ...state, searchTerm: payload };
		case ADD_NOMINATION:
			return {
				...state,
				nominationList: [...state.nominationList, payload],
				notification: 'Item Added',
			};
		case REMOVE_NOMINATION:
			return {
				...state,
				nominationList: state.nominationList.filter(
					(item) => item.imdbID !== payload
				),
				notification: 'Item removed',
			};
		case CLEAR_NOMINATIONS:
			return { ...state, nominationList: [], notification: 'List cleared' };
		case RETRIEVE_NOMINATIONS:
			return { ...state, nominationList: [...payload] };
		case SAVE_NOMINATIONS:
			return { ...state, notification: 'List Saved' };
		case CLEAR_NOTIFICATION:
			return { ...state, notification: '' };
		case NOMINATION_LIST_FULL:
			return { ...state, notification: 'Nomination List full' };
		default:
			return state;
	}
};
export default moviesListReducer;
