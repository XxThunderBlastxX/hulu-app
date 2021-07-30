const API_KEY=process.env.NEXT_PUBLIC_API_KEY;

export default {
    Trending: {
        title: "Trending",
        url: `trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    TopRated: {
        title: "Top Rated",
        url: `movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    ActionMovies: {
        title: "Action",
        url: `discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    ComedyMovie: {
        title: "Comedy",
        url: `discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    HorrorMovie: {
        title: "Horror",
        url: `discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    RomanticMovie: {
        title: "Romance",
        url: `discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    Mystery: {
        title: "Mystery",
        url: `discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    SciFi: {
        title: "Sci-Fi",
        url: `discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    Western: {
        title: "Western",
        url: `discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    Animation: {
        title: "Animation",
        url: `discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    TV: {
        title: "TV",
        url: `discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
}