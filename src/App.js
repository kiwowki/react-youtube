import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Musician from './pages/Musician'
import Not from './pages/Not'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/today' element={<Today />} />
                <Route path='/musician' element={<Musician />} />
                <Route path='*' element={<Not />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App