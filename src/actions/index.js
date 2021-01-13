import axios from 'axios';
import { ADD_NOMINATION, EDIT_TERM, GET_MOVIES, NOT_LOADED } from './types';

export const getMovies = () => async (dispatch, getState) => {
	const { data } = await axios.get(
		`http://www.omdbapi.com/?apikey=dbcd798c&s=${
			getState().movies.searchTerm
		}&type=movie`
	);

	dispatch({ type: GET_MOVIES, payload: data.Search });

	//dispatch({ type: NOT_LOADED });
};

export const editTerm = (newTerm) => ({ type: EDIT_TERM, payload: newTerm });

export const addNomination = (id) => (dispatch, getState) => {
	console.log(id);
	console.log(getState().movies.movieList);
	dispatch({
		type: ADD_NOMINATION,
		payload: getState().movies.movieList.find((item) => item.imdbID === id),
	});
};
