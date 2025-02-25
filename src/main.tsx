
import { createRoot } from 'react-dom/client'
import './style/index.css'
import AppRouter from './routes/AppRouter'
createRoot(document.getElementById('root')!).render(
  <AppRouter />
)
