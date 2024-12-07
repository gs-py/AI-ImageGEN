
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Homepage from './components/Homepage';
import TextSummariser from './components/TextSummariser';
import HeaderNav from './components/HeaderNav';
function App() {
 

  return (
    <>    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
        <Route path='/Image-gen' element={<Home />} />
        <Route path='/text-summarise' element={<TextSummariser />} />
        
        </Routes>
    </BrowserRouter>
    
     </>

   
   
  )
}

export default App
