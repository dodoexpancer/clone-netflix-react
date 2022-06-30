import React, {useEffect} from 'react'
import categories, {getMovies} from "../api";
import './Banner.css'

function Banner() {
    const [movie, setMovie] = React.useState({})

    const fetchRangoMovie = async () => {
        try {
            const netflixOriginalsCategory = categories.find((category) => category.name === "netflixOriginals");
            const data = await getMovies(netflixOriginalsCategory.path)
            const movies = data?.results;
            const randonIndex = Math.floor(Math.random() * movies.length)
            await setMovie(movies[randonIndex])
            console.log(movie)
        } catch (error) {
            console.log('Erro no trendding', error)
        }

    };

    useEffect(() => {
        fetchRangoMovie();
    }, [])

    function truncate(str, n){
        return str?.length > n ? str.substring(0, n -1) + "..." : str;
    }

    return <header className="banner-container" style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center"
    }}>
        <div className="banner-content">
            <h1 className="banner-title">{movie?.title || movie?.original_name || movie?.name}</h1>
            <div className="banner-button-container">
                <button className="banner-button">Assistir</button>
                <button className="banner-button">Minha Lista</button>
            </div>
            <div className="banner-description"> <h2>{truncate(movie?.overview)}</h2></div>
        </div>


    </header>
}

export default Banner;