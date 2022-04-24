import React from 'react'
import '../../App.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Outlet from './Outlet'


export default function Home() {
  return (
    <> 
   <Header/>
   <Outlet/>
   <Footer/>
    </>
   
    
  )
}