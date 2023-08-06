import logo from './logo.svg';
import './App.css';
import NavBar from '../src/component/NavBar';
import Banner from './component/Banner';
import Movies from './component/Movies';
// import Pagination from './component/Pagination';
import Favourite from './component/Favourite';

import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    
    <BrowserRouter>

<NavBar></NavBar>
<Routes>
  <Route path="/movies" element={<><Banner></Banner>
  <Movies/>
  {/* <Pagination/> */}
  
  
  
  </>}></Route>



<Route path='/favourite' element={<Favourite/>}/>

</Routes>
 
{/* <Banner></Banner>
<Movies></Movies>
<Pagination></Pagination> */}
</BrowserRouter>
  );
}

export default App;
