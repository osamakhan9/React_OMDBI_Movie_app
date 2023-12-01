import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Favourite from '../page/Favourite'
import WatchList from '../page/WatchList'
import Registration from '../page/Registration'
import SinglePage from '../page/SinglePage'

const AllRouter = () => {
  return (
	<Routes>
		<Route path="/" element={<Home />}/>
		<Route path='/favourite' element={<Favourite/>}/>
		<Route path='/watchlist' element={<WatchList/>}/>
		<Route path='/register' element={<Registration/>}/>
		<Route path='/singlepage/:id' element={<SinglePage/>}/>
	</Routes>
  )
}

export default AllRouter