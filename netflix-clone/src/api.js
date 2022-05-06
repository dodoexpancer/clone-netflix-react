const API_KEY = "6b627059716a038388d80607c8f0bbe6"
const PT_BR = "pt-BR"


const categories = [{
    name: "trending", title: "Em Alta", path: `/trending/all/week?api_key=${API_KEY}&language=${PT_BR}`,
}, {
    name: "netflixOriginals", title: "Netflix Originais", path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
}, {
    name: "topRated", title: "Populares", path: `/movie/top_rated?api_key=${API_KEY}&language=${PT_BR}`,
}, {
    name: "comedy", title: "Comedia", path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
}, {
    name: "documentaries", title: "Documentarios", path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}]

export const getMovies = async (path) => {
    try {
        const HTTPS = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(HTTPS);
        return await response.json();
    } catch (error) {
        console.log('error getMovies', error)
    }
}

export default categories;
