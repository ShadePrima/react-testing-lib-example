import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import ErrorPage from '../pages/ErrorPage'
import Users from '../users/Users'
import UsersDetailsPage from '../pages/UsersDetailsPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/*' element={<ErrorPage />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UsersDetailsPage />} />
    </Routes>
  )
}

export default AppRouter
