import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx';
import Navigation from './components/Navigation.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navigation />
    <App />
  </BrowserRouter>
    ,
)
