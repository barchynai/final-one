import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDitail/MovieDetail';
import Footer from './components/Footer/Footer';
import Chat from './components/Header/Chat';
import Music from './components/Header/Music';
import Games from './components/Header/Games';
import Login from './components/Header/Login';
import MovieCard from './components/MovieCard/MovieCard';





function App() {
  return (
  
    <div className='app'>
     <Routes>
      
       <Route path='/' element={<Home/>}>
       <Route path='/chat' element={< Chat />}/>
       <Route path='/music' element={< Music />}/>
       <Route path='/games' element={< Games />}/>
       <Route path='/login' element={< Login />}/>
      
      </Route> 
      <Route path="/movie/:imdbID" element={< MovieDetail />}/>

     </Routes>

   </div>
 
   

  );
}

export default App;
