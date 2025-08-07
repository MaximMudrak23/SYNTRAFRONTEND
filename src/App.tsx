import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AllClothes } from './pages/AllClothes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>SELECT UR GENDER</h1>} />
          <Route path='/:gender' element={<MainPage />} />
          <Route path='/:gender/clothes' element={<AllClothes />} />
          <Route path='/:gender/clothes/:clotheID' element={'SINGLE CLOTHE'} />
          <Route path='/getTheLook/:gender' element={'GTL PAGE'} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App