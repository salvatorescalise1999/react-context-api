// importiamo tutti i componenti di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le varie pages da usare nelle rotte
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

// import del layout di ref
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/chisiamo" element={<AboutUs />} />
            <Route path="/prodotti" >
              <Route index element={<Products />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App
