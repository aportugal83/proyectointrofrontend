import './App.css'
import Header from './components/Header'

import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from "./routes/RoutesIndex"

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <RoutesIndex />
    </BrowserRouter>
    </>
  )
}

export default App
