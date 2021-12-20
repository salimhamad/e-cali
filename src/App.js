import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

//import Footer from "./components/Footer";
import Navy from "./components/Navy";

import Home from "./page/Home";
import About from "./page/About";
import Product from "./page/Product";
import Setting from "./page/Setting";
import Personalinformation from "../src/components/Personalinformation";
import CartselectorToBuy from "./page/CartselectorToBuy";

import FullDetailDvice from "./components/FullDetailDvice";

import Login from "./components/Login";
import Register from "./components/Register";

import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navy />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/product/all" element={<Product />} /> */}
          {/* full detail card  id haryakayan waragre ka clik la butonaka k awbata naw full pagekayawa */}
          <Route path="/product/:id" element={<FullDetailDvice />} />
          {/* category ya kany dropdown product  bo haryakayan  category haya ka ya ios ya android ya laptopa bas awwa ayaletawane la pruducta*/}
          <Route path="/products/:category" element={<Product />} />

          <Route path="/CartselectorToBuy" element={<CartselectorToBuy />} />

          <Route path="/setting" element={<Setting />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/personalinformation"
            element={<Personalinformation />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
