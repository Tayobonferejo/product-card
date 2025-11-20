
    import myImage from "./assets/image-product.jpg";
    import myCart from "./assets/icon-cart.svg";


function ProductCard() {
    return(<div className="main-cart flex-cart">
        <div className="image-container container">
            <img src={myImage}></img>
        </div>
        <div className="container cart-content">
            <p>PERFUME</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p className="price-content">A floral solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL</p>
            <div className="flex-cart">
                <p className="price">$149.99</p>
                <p className="price main-price">$169.99</p>
            </div>
            <div className="flex-cart button-container">
              <img src={myCart}></img>
              <button className="button">Add to Cart</button>  
            </div>

        </div>
    </div>)
}

export default ProductCard