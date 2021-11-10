import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StoreProvider } from "./store";
import Home from './pages/Home';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route exact path="/works" element={<Works/>} />
          <Route path="/works/:workId" element={<Work/>} />
          <Route path="/create" element={<Creat/>e} /> */}
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
