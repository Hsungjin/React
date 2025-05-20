import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HotelListPage from '@pages/HotelList'
import TestPage from '@pages/Test'
import HotelPage from '@pages/Hotel'
import useLoadKakao from '@hooks/useLoadkakao'
import MyPage from '@pages/My'
import SigninPage from '@pages/Signin'
import AuthGuard from '@components/auth/AuthGuard'
import Navbar from '@shared/Navbar'

function App() {
  useLoadKakao()

  return (
    <BrowserRouter>
      <AuthGuard>
        <Navbar />
        <Routes>
          <Route path="/" element={<HotelListPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/hotel/:id" element={<HotelPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}

export default App
