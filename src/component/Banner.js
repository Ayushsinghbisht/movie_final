import React, { useEffect, useState } from "react";
import Image from "../spiderman.png";
import axios from "axios";

function Banner(){
    const [movie,setmovie]=useState([]);
    
const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGM4MThkYzc3MTcxZWVjMjAwOGNiOWU5ODljZTk2NyIsInN1YiI6IjY0Y2UxZGQzNGQ2NzkxMDExYzE3MDgyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YKQoHoSlO9Dhdyx1B9UoodIQs8SE9wzUamWwonkvu-s'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
    //   console.log(response.data);
      setmovie(response.data.results[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
  


    return(
        <>
      <div className={` bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[50vh] md:h-[70vh] bg-center bg-cover flex items-end justify-center `}>
       
    

        <div className="text-xl md:text-3xl text-white p-4 bg-gray-900 w-full mx-auto flex justify-center bg-opacity-50">{movie.title}</div>





      </div>
        
        
        
        </>



    )
}
export default Banner;