import axios from 'axios';
import {
	ADD_NOMINATION,
	EDIT_TERM,
	GET_MOVIES,
	REMOVE_NOMINATION,
	CLEAR_NOMINATIONS,
	RETRIEVE_NOMINATIONS,
	SAVE_NOMINATIONS,
	CLEAR_NOTIFICATION,
	NOMINATION_LIST_FULL,
} from './types';

export const getMovies = () => async (dispatch, getState) => {
	const { data } = await axios.get(
		`http://www.omdbapi.com/?apikey=c3f64ba6&s=${
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
	} else {
		dispatch({ type: NOMINATION_LIST_FULL });
	}
};

export const removeNomination = (id) => (dispatch) => {
	dispatch({
		type: REMOVE_NOMINATION,
		payload: id,
	});
};
export const clearNominations = () => (dispatch) => {
	dispatch({ type: CLEAR_NOMINATIONS });
	localStorage.clear();
};

export const saveNominations = () => async (dispatch, getState) => {
	const nominations = getState().movies.nominationList;
	localStorage.setItem('nominations', JSON.stringify(nominations));
	dispatch({ type: SAVE_NOMINATIONS });
};

export const retrieveNominations = () => async (dispatch) => {
	const nominations = JSON.parse(localStorage.getItem('nominations'));

	console.log(nominations);
	if (nominations)
		dispatch({ type: RETRIEVE_NOMINATIONS, payload: nominations });
};

export const clearNotification = () => ({ type: CLEAR_NOTIFICATION });
