import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import axios from "axios";
import "./MovieList.css"

function MovieList() {
    const [movie, setMovie] = useState([]);
    console.log(movie);
    
    function getMovie() {
        const getUrl = `${process.env.REACT_APP_URL_Server}/trending`;
        axios.get(getUrl)
            .then((response) => {
                setMovie(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const sendMovieToServer = (movie) =>{
        const postUrl = `${process.env.REACT_APP_URL_Server}/addMovie`;

        let filterData = {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            comment: movie.comment
        }

        axios.post(postUrl, filterData)
        .then((response) => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <section className="cardSection">
            {
                movie.map((item, index) => {
                    return <Movie movie={item} key={index} sendMovieToServer={sendMovieToServer} />
                })
            }
        </section>
    );
}

export default MovieList;