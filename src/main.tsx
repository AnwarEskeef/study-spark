
import { createRoot } from 'react-dom/client'
import './style/index.css'
import AppRouter from './routes/AppRouter'
// import ContextFunction from ''
import { ContextApp } from './Context/Context';

createRoot(document.getElementById('root')!).render(
  <ContextApp>
    <AppRouter />
  </ContextApp> 
)
