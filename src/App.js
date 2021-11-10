import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StoreProvider } from "./store";
import Attraction from "./pages/Attraction";
import Restaurant from "./pages/Restaurant.js";
import Hotel from "./pages/Hotel";
import Activity from "./pages/Activity.js";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Attraction/>} />
          <Route path="/attraction" element={<Attraction/>} />
          <Route path="/restaurant" element={<Restaurant/>} />
          <Route exact path="/hotel" element={<Hotel/>} />
          <Route path="/activity" element={<Activity/>} />
          {/* <Route path="/works/:workId" element={<Work/>} /> */}
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
