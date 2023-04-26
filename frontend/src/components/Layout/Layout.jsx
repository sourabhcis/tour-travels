import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../router/Routers'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthUser } from '../../redux/action/auth'
import { useState } from 'react'

const Layout = () => {
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({})
  const {auth} = useSelector((state) => ({
    auth: state.auth,
  }));

  

  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      dispatch(getAuthUser(user._id))
    }
  },[])

  useEffect(()=> {
    if(auth){
      setAuthData(auth)
    }
  },[auth])

  return (
    <>
        <Header auth={authData} />
        <Routers/>
        <Footer/>
    </>
  )
}

export default Layout