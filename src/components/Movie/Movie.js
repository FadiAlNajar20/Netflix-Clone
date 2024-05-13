import Cards from "../Cards/Cards";
import "./Movie.css"

function Movie(props) {
    
    return (
        <section className="cardSection">
            <Cards
                key={props.movie.index}
                id={props.movie.id}
                title={props.movie.title}
                overview={props.movie.overview}
                release_date={props.movie.release_date}
                poster_path={props.movie.poster_path}
                sendMovieToServer={props.sendMovieToServer}
                location="home"
            />
        </section>
    );
}

export default Movie;