import React from 'react'
import './style/index.css'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Header />
      <main className='mb-30'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App