const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchScifi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchDisney: `/list/5905?api_key=${API_KEY}&language=en-US`,
  fetchMarvel: `/list/12179?api_key=${API_KEY}&language=en-US`,
  fetchNatGeo: `/list/8213519?api_key=${API_KEY}&language=en-US`,
  fetchPixar: `/list/4068?api_key=${API_KEY}&language=en-US`,
  fetchStarWars: `/list/8136?api_key=${API_KEY}&language=en-US`,
}

export default requests
