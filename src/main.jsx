import ReactDOM from 'react-dom/client'
import './index.scss'
import MainRoutes from './routes.jsx'
import { AuthContextProvider } from './context/authcontext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </AuthContextProvider>

)
