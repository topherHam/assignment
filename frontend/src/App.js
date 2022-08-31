import './App.css'
import React from 'react'
import Home from './pages/home'
import PrivateRoute from './common/privateRoute'
import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom'
import Auth from './pages/auth'

import { Provider } from 'react-redux'
import store from './redux/store'

export const AuthContext = React.createContext(null)

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route index element={<Auth />} />
          <Route path="auth" element={<Auth />} />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<>404 : No Found</>} />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
