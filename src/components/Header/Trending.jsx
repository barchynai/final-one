import axios from 'axios'
import React, {useEffect, useState} from 'react'
import SingleContent from '../trending/SingleContent';
import CustomPagination from '../pagination/CustomPagination';
import Header from './Header';
import '../trending/Trending.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Genres from '../trending/genre/Genre';
import useGenre from '../trending/genre/useGenre';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Trending() {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=57d03091a59398ea6e390ffa9806caf6&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

      useEffect(()=>{
        fetchTrending() 
        // eslint-disable-next-line
      }, [genreforURL, page])
  return (  
      <> 
      <Header/>
      <span className="pageTitle-trending ">Trending Today</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {
          content && content.map((c)=>(
            <SingleContent 
            key={c.id} id={c.id} 
            poster={c.poster_path} 
            title={c.title || c.name} 
            date={c.first_air_date || c.release_date} 
            media_type={c.media_type} 
            vote_average={c.vote_average}/>
          ))
        }
      </div>
      <ThemeProvider theme={darkTheme}>
        <div>
         <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      </div>
      </ThemeProvider>
      
     
      </>
   
  )
}