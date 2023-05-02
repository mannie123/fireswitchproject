
import { Route, Routes } from "react-router-dom";
import "../src/App.css"
import Academy from "./Pages/Academy";
import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio"
import Product from "./Pages/Product";

function App() {
  return (
    <div>


<Routes>


<Route path="/" element={<Home homeTitle="Innovation With Digital Tech Tools"/>}/>
{/* <Route path="/Academy/:message" element={<Home />}/> */}
<Route path="/Academy/:message" element={<Academy/>}/>
<Route path="/Portfolio" element={<Portfolio/>}/>
<Route path="/Product" element={<Product/>}/>


</Routes>



    </div>
  );
}

export default App;
