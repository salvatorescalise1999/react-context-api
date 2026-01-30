import axios from "axios"
import { useState, useEffect } from "react"
import ProductList from "../components/ProductList"

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

    return (
        <>
            <h2>Dai un’occhiata ai nostri prodotti 🛍️</h2>
            <ProductList products={products} />
        </>
    )
}

export default Products
