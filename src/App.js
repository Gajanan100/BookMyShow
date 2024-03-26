
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header';
// import { Movies } from './Pages/Movies';
import { Movies } from './Pages/Movies/Movies';
import { Plays } from './Pages/Plays/Plays';
import { Acitivities } from './Pages/Acitivities/Acitivities';
import { Events } from './Pages/Events/Events';
import { Footer } from './Footer/Footer';
import { Stream } from "./Pages/Stream/Stream";
import { Sports } from "./Pages/Sports/Sports";
import { ListShow } from "./Pages/ListYourShow/ListShow";

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Movies/>} ></Route>
    <Route path='/stream' element={<Stream/>} ></Route>
    <Route path='/events' element={<Events/>} ></Route>
    <Route path='/plays' element={<Plays/>} ></Route>
    <Route path='/sports' element={<Sports/>}></Route>
    <Route path='/acitivities' element={<Acitivities/>} ></Route>
    <Route path='/show' element={<ListShow/>} ></Route>  
     <Route path='*' element={<h3>Page not found</h3>}></Route>
    </Routes>
    <Footer/>
     </>
  );
}

export default App;
