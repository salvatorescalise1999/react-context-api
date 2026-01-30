function ProductDetailCard({ product }) {

    return (
        <>
            <div className="card-detail">

                <h2 className="product-title-detail">{product.title}</h2>

                <img className="product-image-detail" src={product.image} />

                <div className="product-category-detail">
                    <p>categoria:</p>
                    <p>{product.category}</p>
                </div>

                <p className="product-description-detail">{product.description}</p>

                <div className="product-price-detail">
                    <p>prezzo:</p>
                    <p>{product.price} €</p>
                </div>

            </div>

        </>

    )
}

export default ProductDetailCard

