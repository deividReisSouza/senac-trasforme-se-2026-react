import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';

function App() {
  //tudo aqui é js
  //tudo demtro do() é html
  return (
    <Routes>
      <Route path="/" //path é caminho e to é para o caminho 
        element={<Home />} />
      <Route path="/login"
        element={<Auth />} />
    </Routes>
  )
}

export default App;