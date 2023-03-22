
import { Navbar } from "./component/Header/navbar.js";
import { Footer } from "./component/Footer/footer.js";
import { Home } from "./pages/home.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Weather } from "./pages/weather.js";
import { Monster } from "./pages/monster.js";
import { Jokes } from "./pages/jokes.js";
import { Quotes } from "./pages/quotes.js";


import "./index.css";

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/weather" element={<Weather  />} />
        <Route path="/monster" element={<Monster  />} />
        <Route path="/jokes" element={<Jokes  />} />
        <Route path="/quotes" element={<Quotes  />} />
      </Routes>
    </BrowserRouter>
    <Footer />
   </>
  );
}

export default App;
