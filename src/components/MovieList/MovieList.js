import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import axios from "axios";
import "./MovieList.css"

function MovieList() {
    const getUrl = `https://movies-library-9dmu.onrender.com/trending`;
    const [movie, setMovie] = useState([]);
    console.log(movie);

    function getMovie() {
        axios.get(getUrl)
            .then((response) => {
                setMovie(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const sendMovieToServer = (movie) =>{
        const postUrl = "https://movies-library-9dmu.onrender.com/addMovie";

        let filterData = {
            title: movie.title || "There is no Title",
            release_date: movie.release_date || "There is no Release Date",
            poster_path: movie.poster_path || "There is no Poster Path",
            overview: movie.overview || "There is no Overview",
            comment: movie.comment || "There is no Comment"
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