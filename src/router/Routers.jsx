import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import Error from '../components/Error'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Categorias from '../components/Categorias'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/item-detail/:id' element={<ItemDetailContainer />} />
      <Route path='/categoria/:nombre' element={<Categorias />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Routers