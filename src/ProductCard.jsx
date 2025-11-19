
    import myImage from "./assets/image-product.jpg";


function ProductCard() {
    return(<div>
        <div>
            <img src={myImage}></img>
        </div>
        <div>
            <p>PERFUME</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>A floral solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL</p>
        </div>
    </div>)
}

export default ProductCard