// importiamo tutti i componenti di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  import provider contesto
import { BudgetProvider } from "./contexts/BudgetContext";

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
      <BudgetProvider>
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
      </BudgetProvider>

    </>
  )
}

export default App
