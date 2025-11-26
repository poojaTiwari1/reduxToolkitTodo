import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList/TodoList'
import DragDropLi from './components/dragDrop/DragDropLi'
import { DragDropText } from './components/dragDrop/DragDropText'
import TrafficLights from './components/TrafficLights/TrafficLights'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/dragdropli' element={<DragDropLi />} />
        <Route path='/dragdroptext' element={<DragDropText />} />
        <Route path='/traffic' element={<TrafficLights />} />
      </Routes>
    </>
  )
}

export default App
