import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import Cart from './Cart'
import AdminePage from './AdminePage'
import EditProduct from './EditProduct'
import SingleProduct from './SingleProduct'
import PrivateRoute from '../Componants/PrivateRoute'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/admin' element={
            <PrivateRoute>
            <AdminePage/>
              </PrivateRoute>
        } />
        <Route path='/products/:id/edit' element={
          <PrivateRoute>
        <EditProduct/>
          </PrivateRoute>
        
        } />
        <Route path='/products/:id' element={<SingleProduct/>} />
        <Route path='*' element={<h3>Page is not found</h3>} />
      </Routes>
    </div>
  )
}

export default MainRoute
