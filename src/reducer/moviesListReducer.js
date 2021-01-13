import { EDIT_TERM, GET_MOVIES } from './../actions/types';

const moviesListReducer = (
	state = { list: [], searchTerm: '' },
	{ type, payload }
) => {
	switch (type) {
		case GET_MOVIES:
			return { ...state, list: payload };
		case EDIT_TERM:
			return { ...state, searchTerm: payload };
		default:
			return state;
	}
};
export default moviesListReducer;
