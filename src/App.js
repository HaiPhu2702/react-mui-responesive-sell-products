
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/home/Home'
import DetailProduct from "./pages/detailproduct/DetailProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<DetailProduct />} />
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
 