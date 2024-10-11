import { createRoot } from 'react-dom/client';
import './global.css';
import Header from './pages/components/Header/Header';
import Dashboard from './pages/components/Dashboard/Dashboard';
import smartHomeData from './smartHomeData';

createRoot(
  document.querySelector('#app'),
).render(
  <div className="container">
    <Header title="Chytrý dům"/>
    <Dashboard data={smartHomeData}/>
  </div>
);
