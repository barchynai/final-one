import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.scss'
import { Badge } from '@mui/material'
import {Link} from 'react-router-dom'

const SingleContent = ({
    id, 
    poster, 
    title, 
    date,
    media_type, 
    vote_average
}) => {
  return (
   <div className='media'>
        <Badge badgeContent={vote_average} color={vote_average>6?'primary':'secondary'} style={{zIndex:'-5'}}/>
        <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} style={{zIndex:'-7'}}/>
        <b className='title'>{title}</b>
        <span className='subTitle'>
            {media_type==='tv'?"TV Series" : "Movie"}
            <span className='subTitle'>{date}</span>
        </span>
    </div>
  )
}

export default SingleContent