import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';


export default function Outlet() {   
        const dispatch = useDispatch();

    useEffect(() =>{
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
    }, [dispatch])
  return (
    <div style={{marginTop: 90}}>
        <div className='banner-img'></div>
        <MovieListing/>
    </div>
  )
}
