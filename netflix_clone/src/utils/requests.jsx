const API_KEY = Process.env.VITE_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api key=${API_KEY}&languge=en-US`,
  fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetchCrimeMovies:`/discover/movies?api_key=${API_KEY}&with-geners=80`,
  fetchHorrornMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
  fetchTVMovies:`/discover/movies?api_key=${API_KEY}&with_geners=10770`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
 fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_geners=36`,
}
export default requests;