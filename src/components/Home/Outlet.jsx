import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';


export default function Outlet() {   
        const dispatch = useDispatch();
        const movieText = 'Spider'
        const showText = 'Friends'

    useEffect(() =>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
    }, [dispatch])
  return (
    <div style={{marginTop: 90}}>
        <div className='banner-img'></div>
        <MovieListing/>
    </div>
  )
}
