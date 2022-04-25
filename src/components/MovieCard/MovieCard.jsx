import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.scss'

const MovieCard = (props) =>{ 
  const {data} = props
  return (
    <div className='card-item'>
      <Link to={`/movie/${data.imdbID}`}>
      <div className='card-inner'>
        <div className='card-top'>
          <img className='poster' src={data.Poster} alt={data.Title}/>
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4 className='title'>{data.Title}</h4>
            <p className='subTitle'>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard