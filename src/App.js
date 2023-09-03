import './App.css';
// import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import HomePage from './pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App font-opensans'>
      <Routes>
        <Route index path="/" element={<HomePage />} /> 
      </Routes>
    </div>
  );
}

export default App;
