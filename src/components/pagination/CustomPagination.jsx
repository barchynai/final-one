import React from 'react'
import { Pagination } from '@mui/material'
import { createTheme, ThemeProvider } from '@material-ui/core'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main:'#fff'
    }
  },
});

const CustomPagination = ({ setPage, numOfPages = 5 }) => {

  const handleChangePage = (page) =>{
    setPage(page);
    window.scroll(0,0)
  }

  return (
    <div 
    style={{
      width: '100%',
      display: 'flex',
      justifyContent:'center',
      marginTop: 10,
    }}> 
    <ThemeProvider theme={darkTheme}>
    <Pagination count={numOfPages} onChange={(e)=>handleChangePage(e.target.textContent)}
    color="primary"/>
    </ThemeProvider>
      
    </div>
  )
}
export default CustomPagination