import { ADD_NOMINATION, EDIT_TERM, GET_MOVIES } from './../actions/types';

const moviesListReducer = (
	state = { movieList: [], searchTerm: '', nominationList: [] },
	{ type, payload }
) => {
	switch (type) {
		case GET_MOVIES:
			return { ...state, movieList: payload };
		case EDIT_TERM:
			return { ...state, searchTerm: payload };
		case ADD_NOMINATION:
			return { ...state, nominationList: [...state.nominationList, payload] };
		default:
			return state;
	}
};
export default moviesListReducer;
