const API_KEY = "87392fc2a3a6a644f0361eaf55256493"

const requests = {
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16`
}

export default requests;