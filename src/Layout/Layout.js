import '../Layout/Layout.css'
import {Outlet } from 'react-router-dom'
import Rodape from '../Footer/Rodape'
import Header from '../Header/Header'


function Layout() {
    return(
        <>
       <Header/>
        <Outlet/>
       <Rodape/> 
        </>
    )
}

export default Layout