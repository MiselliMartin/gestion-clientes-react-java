import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Clientes } from './pages/Clientes'
import { AddCliente } from './pages/AddCliente'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/clientes' element={<Clientes />}></Route>
          <Route path='/add-cliente' element={<AddCliente />}></Route>
          <Route path='/edit-cliente/:id' element={<AddCliente />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>,
)
