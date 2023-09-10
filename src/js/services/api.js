import axios from 'axios';

import { setLoader, removeLoader } from './loader';

const { TMDB_API_KEY } = process.env;
const BODY_SELECTOR = 'body';

async function getPopMovies(page) {
  try {
    setLoader(BODY_SELECTOR);
    const respons = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false`
    );
    const data = await respons.data;
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    removeLoader(BODY_SELECTOR);
  }
}

async function getMovieByKeyword(keyword, page) {
  try {
    setLoader(BODY_SELECTOR);
    const respons = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${keyword}&page=${page}&include_adult=false`
    );
    const data = await respons.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    removeLoader(BODY_SELECTOR);
  }
}

async function getMovieDetails(movieId) {
  try {
    setLoader(BODY_SELECTOR);
    const respons = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const data = await respons.data;
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    removeLoader(BODY_SELECTOR);
  }
}

// Returns related videos for movie
async function getRelatedVideos(movieId) {
  try {
    setLoader(BODY_SELECTOR);
    const respons = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const data = await respons.data;
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    removeLoader(BODY_SELECTOR);
  }
}
const moviesAPI = {
  getPopMovies,
  getMovieByKeyword,
  getMovieDetails,
  getRelatedVideos,
};

export default moviesAPI;
