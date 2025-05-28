import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PrivateRoute from '@components/auth/PrivateRoute'
import HotelListPage from '@pages/HotelList'
import TestPage from '@pages/Test'
import HotelPage from '@pages/Hotel'
import useLoadKakao from '@hooks/useLoadkakao'
import MyPage from '@pages/My'
import SigninPage from '@pages/Signin'
import AuthGuard from '@components/auth/AuthGuard'
import Navbar from '@shared/Navbar'
import SettingsPage from '@pages/settings'
import LikePage from '@pages/settings/like'

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
          <Route
            path="/my"
            element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            }
          />
          <Route path="/signin" element={<SigninPage />} />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings/like"
            element={
              <PrivateRoute>
                <LikePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}

export default App
