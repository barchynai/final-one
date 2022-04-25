import React, { useEffect, useState } from 'react'
import "./Footer.scss";
import { createTheme, TextField, ThemeProvider } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import { Button, Tabs, Tab } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Footer = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch();

  const submitHandler = (e) =>{
    e.preventDefault();
    if(term === '') return alert('Please enter search term')
    //console.log(term)
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }

  return (
    <div className="footer" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'black' }}>
     <div className='search-bar'>
     <form onSubmit={submitHandler}>
       <input className='input' type='text' value={term} placeholder='Search Movies or Shows' onChange={(e) =>setTerm(e.target.value)}/>
       <button type='submit'><i className='fa fa-search'></i></button>
     </form>
     </div>
     </div>
  );
};

export default Footer;