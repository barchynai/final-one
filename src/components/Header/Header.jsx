import React, {useState} from 'react';
import images from '../../image';
import { Link } from 'react-router-dom'
import {MdViewHeadline} from 'react-icons/md';
import {MdClear} from 'react-icons/md'; 
import './Header.scss'


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
  <>
  <div className='header__wrapper' >
        <div className='header__logo'>
            <Link to='/'><img src={images.logo} alt='netflix logo'/></Link>
        </div>
        <Link to='/trending' className='header__links'><h3 className='p__opensans'>Trending</h3></Link>
        <Link to='/music' className='header__links'><h3 className='p__opensans'>Music</h3></Link>
        <Link to='/games' className='header__links'><h3 className='p__opensans'>Games</h3></Link>
   
        <div className='header-login'>
        <Link to='/login' className='header__links'><h3 className='p__opensans'>Log In / Register</h3></Link>
        </div>

        <div className='header__smallscreen'>
        <MdViewHeadline color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="header__smallscreen_overlay flex__center slide-bottom">
            <MdClear fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <Link to='/trending' className='header__links-smallscreen_links' onClick={() => setToggleMenu(false)}><h3 className='p__opensans'>Trending</h3></Link>
            <Link to='/music' className='header__links-smallscreen_links' onClick={() => setToggleMenu(false)}><h3 className='p__opensans'>Music</h3></Link>
            <Link to='/games' className='header__links-smallscreen_links' onClick={() => setToggleMenu(false)}><h3 className='p__opensans'>Games</h3></Link>
           </div>
        )}
        </div>

    </div>
  </>
  )
}
