import { Route, Routes } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import BranchPage from "./pages/BranchPage";
import Cart from "./pages/Cart";

// import components
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import convertNumberToPersian from "./convertNumberToPersian";

function App() {
  convertNumberToPersian();
  return (
    <ScrollToTop>
      <div className="App relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branches/:branchName" element={<BranchPage />} />
          <Route path="/branches/:branchName/menu/:foodCategory" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
