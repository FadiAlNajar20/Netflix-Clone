import axios from "axios";
import { useEffect, useState } from "react";
import Cards from '../Cards/Cards';


function FAvList() {
    const [favMovie, setFavMovie] = useState([]);

    const getDataFRomSErver = () => {
        const url = `${process.env.REACT_APP_URL_Server}/getAllMovie`;
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setFavMovie(response.data);
            }).catch((error) => {
                console.log(error);
            })

    }

    const deltetMovie = (id) =>{
        const url = `${process.env.REACT_APP_URL_Server}/DELETE/${id}`;
        axios.delete(url)
        .then((response) => {
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }

 

    useEffect(() => {
        getDataFRomSErver();
    },[])

    return (

        <>
            {
                favMovie.map((item)=> {
                    return <Cards 
                    key={item.index}
                    id={item.id}
                    title={item.title}
                    overview={item.overview}
                    release_date={item.release_date}
                    poster_path={item.poster_path} 
                    comment={item.comment}
                    deltetMovie={deltetMovie}
                    location="favList"/>
                })
            }
        </>
    );
}

export default FAvList;