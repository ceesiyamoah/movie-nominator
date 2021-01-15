import axios from 'axios';
import {
	ADD_NOMINATION,
	EDIT_TERM,
	GET_MOVIES,
	REMOVE_NOMINATION,
	CLEAR_NOMINATIONS,
	RETRIEVE_NOMINATIONS,
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
	if (getState().movies.nominationList.length < 5) {
		dispatch({
			type: ADD_NOMINATION,
			payload: getState().movies.movieList.find((item) => item.imdbID === id),
		});
	}
};

export const removeNomination = (id) => (dispatch) => {
	dispatch({
		type: REMOVE_NOMINATION,
		payload: id,
	});
};
export const clearNominations = () => ({ type: CLEAR_NOMINATIONS });

export const saveNominations = () => async (dispatch, getState) => {
	const nominations = getState().movies.nominationList;
	localStorage.setItem('nominations', JSON.stringify(nominations));
};

export const retrieveNominations = () => async (dispatch) => {
	const nominations = localStorage.getItem('nominations');
	dispatch({ type: RETRIEVE_NOMINATIONS, payload: JSON.parse(nominations) });
};
