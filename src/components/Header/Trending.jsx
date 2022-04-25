import axios from 'axios'
import React, {useEffect, useState} from 'react'
import SingleContent from '../trending/SingleContent';
import CustomPagination from '../pagination/CustomPagination';
import Header from './Header';
import '../trending/Trending.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Trending() {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();


  
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=57d03091a59398ea6e390ffa9806caf6&page=${page}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };


      useEffect(()=>{
        fetchTrending() 
        // eslint-disable-next-line
      }, [ page])
  return (  
      <> 
      <Header/>
      <p className="pageTitle-trending ">Trending Today</p>
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