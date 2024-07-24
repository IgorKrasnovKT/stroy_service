import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';

const config = {
  hideOverlaysOnDocumentScrolling: true,
  ripple: true,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PrimeReactProvider value={config}>
      <App />
    </PrimeReactProvider>
  </BrowserRouter>,
)
