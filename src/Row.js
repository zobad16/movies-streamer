import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl,isLargeRow}) {

    //creating a state -> react way of creating a variable
    //created an array of movies
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        
        //If we use with [] then it only runs once the page loads.
        //if instead of [] we had movies-> this function would run everytime the movies variable changes
        
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            //console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    //console.table(movies);

  return (
    <div className="row">
        <h2>{title}</h2>
        {/*Container-> containing movies posters*/}
        <div className="row__posters">
            {movies.map(movie=>(
                <img
                    key={movie.id} 
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${baseUrl}${isLargeRow? movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.name}/>
            ))}
        </div>
        <div className=""></div>
        

    </div>
  )
}

export default Row