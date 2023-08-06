import React from"react";
import logo from "../movieimage.png";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        <div className=" border px-8 flex space-x-8 items-centre py-2 ">
        <img className="w-[50px] md:w-[80px]" src={logo}></img>
        <Link to="/movies"  className="text-blue-400 font-bold text-xl md:text-2xl pt-5 ">Movies</Link>
        <Link to="/favourite" className="text-blue-400 font-bold text-xl md:text-2xl pt-5">Favourite</Link>

        </div>

        </> 
    )
}
export default NavBar;