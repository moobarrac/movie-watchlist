import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import AddPage from './component/AddPage';
import Watched from './component/Watched';
import Watchlist from './component/Watchlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Watchlist/>}/>
          <Route path='/watched' exact element={<Watched/>}/>
          <Route path='/add' exact element={<AddPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
