import axios from 'axios';
import {
	ADD_NOMINATION,
	EDIT_TERM,
	GET_MOVIES,
	REMOVE_NOMINATION,
	CLEAR_NOMINATIONS,
} from './types';

export const getMovies = () => async (dispatch, getState) => {
	const { data } = await axios.get(
		`http://www.omdbapi.com/?apikey=dbcd798c&s=${
			getState().movies.searchTerm
		}&type=movie`
	);

	dispatch({ type: GET_MOVIES, payload: data.Search });
};

export const editTerm = (newTerm) => ({ type: EDIT_TERM, payload: newTerm });

export const addNomination = (id) => (dispatch, getState) => {
	dispatch({
		type: ADD_NOMINATION,
		payload: getState().movies.movieList.find((item) => item.imdbID === id),
	});
};

export const removeNomination = (id) => ({
	type: REMOVE_NOMINATION,
	payload: id,
});
export const clearNominations = () => ({ type: CLEAR_NOMINATIONS });
