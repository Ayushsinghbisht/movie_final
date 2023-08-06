import React, { useState } from "react";



function Pagination(event){

    // let [pagenumber,setpage]=useState(1);

    // function goahead(){
    //     setpage(pagenumber+1);
    // }
    // function godown(){
    //     if(pagenumber>1){
    //     setpage(pagenumber-1);}
    // }


    return(<>
    
    <div className=" m-b-8 w-full flex justify-center ">
<button 
onClick={event.godown} 
className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl m-b-8  ">Previous</button>

<button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-100 m-b-8">
    {event.pagenumber}
    </button>

<button 
onClick={event.goahead} 
className="p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl m-b-8">next</button>

    </div>
    
    
    
    
    
    </>)
}
export default Pagination;