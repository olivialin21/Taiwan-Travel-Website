import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StoreProvider } from "./store";
import Category from "./pages/Category";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Category/>} />
          <Route exact path="/:catagory" element={<Category/>} />
          {/* <Route path="/attraction" element={<Attraction/>} />
          <Route path="/restaurant" element={<Restaurant/>} />
          <Route path="/hotel" element={<Hotel/>} />
          <Route path="/activity" element={<Activity/>} /> */}
          {/* <Route path="/works/:workId" element={<Work/>} /> */}
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
