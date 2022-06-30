import React, {useEffect} from "react";
import {getMovies} from "../api";
import './Row.css'

const imageHost = "https://image.tmdb.org/t/p/original/";

function Row({path, title, isLarge}) {
    const [movies, setMovies] = React.useState([]);
    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path)
            setMovies(data?.results);
        } catch (error) {
            console.log(error, 'err in fetMovies')
        }
    };
    useEffect(() => {
        fetchMovies(path)
    }, [])

    return (
        <div className="row-container">
            <h2 className="row-header">{title}</h2>
            <div className="row-cards">
                {movies?.map(movie => {
                    return (
                        <img key={movie.id}
                             src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path }`}
                             alt={movie.name}
                             className={`movie-card ${isLarge && "movie-card-large"}`}/>
                    )
                })}

            </div>
        </div>
    )
}

export default Row
