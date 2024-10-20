import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 ">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Result />} path="/result" />
        <Route element={<BuyCredit />} path="/buy" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;