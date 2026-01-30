import axios from "axios"
import { useState, useEffect } from "react"
import ProductList from "../components/ProductList"

import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

const endpoint = "https://fakestoreapi.com/products";


function Products() {

    // creiamo var di stato per lista Prodotti
    const [products, setProducts] = useState([]);

    // funzione che al click fa chiamata Ajax verso endpoint API
    function fetchProducts() {
        axios.get(endpoint)
            .then((res) => {
                console.log("RISPOSTA API:", res.data);
                setProducts(res.data);
            })
            .catch(err => console.error(err))
    }

    useEffect(fetchProducts, []);


    // Recuperiamo budgetMode dal context
    const { budgetMode } = useContext(BudgetContext);

    // Filtriamo prodotti in base a budgetMode
    const filteredProducts = budgetMode
        ? products.filter((p) => p.price <= 30) // solo prodotti <= 30
        : products; // altrimenti tutti

    return (
        <>
            <h2>Dai un’occhiata ai nostri prodotti 🛍️</h2>

            {/* Passiamo a ProductList i prodotti filtrati */}
            <ProductList products={filteredProducts} />
        </>
    )
}

export default Products
