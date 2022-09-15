import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './Requests';
import "./Banner.css"

const baseUrl = "https://image.tmdb.org/t/p/original/";
function truncate(str, n){
    return str.length>n? str.substring(0,n-1)+"...":str;
}
function Banner() {
    const [movie, setMovies] = useState([]);
    useEffect( () =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
                );
           return request; 
        }
        fetchData();
    },[])
    console.log("Banner items>>>>>")
    console.log(movie);
  return (
    <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage: `url("${baseUrl}${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }}>
        <div className='banner__contents'>
        
        <h1 className='banner__title'>{ movie?.title || movie?.name || movie?.orignal}</h1>
        
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        
        <div className="banner__description">
            {truncate(movie?.overview,150)}
        </div>

        {/**<div>
         * <button/>
         * <button/>
         * <div/> */}
        {/**Description */}
         </div>
    </header>
  )
}

export default Banner