import React, { useEffect, useState } from "react";
import image from "../spiderman.png";
import Pagination from './Pagination';
import axios from "axios";
import { Audio, Oval } from 'react-loader-spinner';

function Movies(){

const [movies,setmovies]=useState([]);
let [pagenumber,setpage]=useState(1);
const [hover,sethover]=useState('');
const [favourites,setfavourites]=useState([]);



// let [url,seturl]=useState(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`);

function goahead(){
    setpage(pagenumber+1);
    // seturl("`https://api.themoviedb.org/3/movie/popular?language=en-US&page=2");
}
function godown(){
    if(pagenumber>1){
    setpage(pagenumber-1);}
}


// useEffect(function(){
  
//     axios.get("https://api.themoviedb.org/3/movie/popular?api_key=30c818dc77171eec2008cb9e989ce967").then((res=>{

// setmovies(res.data.results);


// }));
// })
function add(movie){
    let newarray=[...favourites,movie]
    setfavourites([...newarray])
    // console.log(newarray);
    localStorage.setItem("tmdb",JSON.stringify(newarray))
// console.log((newarray));
}
function remove(movie){
  let newarray=favourites.filter((m)=> m.id!=movie.id)
    setfavourites([...newarray]);
    localStorage.setItem("tmdb",JSON.stringify(newarray));
  }



const options = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pagenumber}`,
//   url: url,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGM4MThkYzc3MTcxZWVjMjAwOGNiOWU5ODljZTk2NyIsInN1YiI6IjY0Y2UxZGQzNGQ2NzkxMDExYzE3MDgyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YKQoHoSlO9Dhdyx1B9UoodIQs8SE9wzUamWwonkvu-s'
  }
};

axios
  .request(options)
  .then(function (response) {
    // console.log(response.data);
    setmovies(response.data.results);
    let oldfav=localStorage.setItem("tmdb");
    oldfav=JSON.parse(oldfav);
    setfavourites([...oldfav]);
  })
  .catch(function (error) {
    console.error(error);
  });

// useEffect(function(){
//   let oldfav=localStorage.setItem("tmdb");
//   oldfav=JSON.parse(oldfav);
//   setfavourites([...oldfav]);
// },[])

    return(<>
    

    
    <div className="mb-8 text-center">
    {/* {console.log("res.data.page")} */}
        <div className="mt-8 font-bold text-2xl text-center mb-8">Trending now</div>
        {
            movies.length===0 ?

            <div className="flex justify-center">
             <Oval
            height="100"
            width="100"
            color="gray"
            secondaryColor="gray"
            arialabel="loading"/> </div>:<>
        
        <div>
        <div className="flex flex-wrap justify-center  ">

            {
                movies.map((movie)=>(
                    <div  className={`relative bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[25vh] w-[120px] md:h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl flex  items-end  m-4 hover:scale-110 ease-out duration-300`}  
                       onMouseEnter={()=>{
                        sethover(movie.id)
                       }}
                       onMouseLeave={()=>{
                        sethover("");
                       }}
                       >{
                        
                            hover == movie.id&&<>{!favourites.find((m)=>m.id==movie.id)?<div className="absolute top-2 right-2 bg-gray-100 rounded-xl text-xl cursor-pointer" onClick={()=>{
                                add(movie)
                            }}>🤍 </div>:<div className="absolute top-2 right-2 bg-voilet-100 rounded-xl text-xl cursor-pointer" onClick={()=>{
                                remove(movie)
                            }}> ❤️</div> }
                           </>
                        }
                        
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold ">{movie.title}</div></div>
                ))
            }
{/* <div  className={`bg-[url(${image})] h-[25vh] w-[150px] md:h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl flex  items-end  m-4 hover:scale-110 ease-out duration-300`}>
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold ">{movies[1].title}</div></div> */}

           


            





            
                
                {/* <div  className={`bg-[url(${image})] h-[25vh] w-[150px] md:h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl flex  items-end  m-4 hover:scale-110 ease-out duration-300`}>
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold "> title</div></div>
                <div  className={`bg-[url(${image})] h-[25vh] w-[150px] md:h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl flex  items-end  m-4 hover:scale-110 ease-out duration-300`}>
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold "> title</div></div>
                <div  className={`bg-[url(${image})] h-[25vh] w-[150px] md:h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl flex  items-end  m-4 hover:scale-110 ease-out duration-300`}>
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold "> title</div></div>
                <div  className={`bg-[url(${image})] h-[25vh] w-[150px] md:h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl flex  items-end  m-4 hover:scale-110 ease-out duration-300`}>
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold "> title</div></div>
                <div  className={`bg-[url(${image})] h-[25vh] w-[150px] md:h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl flex  items-end  m-4 hover:scale-110 ease-out duration-300`}>
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold "> title</div></div>
                <div  className={`bg-[url(${image})] h-[25vh] w-[150px] md:h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl flex  items-end  m-4 hover:scale-110 ease-out duration-300`}>
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold "> title</div></div>
                <div  className={`bg-[url(${image})] h-[25vh] w-[150px] md:h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl flex  items-end  m-4 hover:scale-110 ease-out duration-300`}>
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold "> title</div></div>
                 */}
 

            
        </div>
        
        </div>
        </>}







    </div>
    
    
    
    <Pagination pagenumber={pagenumber} goahead={goahead} godown={godown} />
    
    </>)
}
export default Movies;