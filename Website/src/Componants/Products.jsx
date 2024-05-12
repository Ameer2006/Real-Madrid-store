import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Style.css';

export default function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:81/product');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const addToCart = (product) => {
        const selectedProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            imgUrl: product.imgUrl,
        };

        let storedProducts = JSON.parse(localStorage.getItem('cartItems')) || [];
        storedProducts = Array.isArray(storedProducts) ? storedProducts : [];

        const isProductInCart = storedProducts.some(item => item.id === selectedProduct.id);

        if (isProductInCart) {
            alert('This item is already in your cart.');
        } else {
            storedProducts.push(selectedProduct);
            localStorage.setItem('cartItems', JSON.stringify(storedProducts));
            console.log('Stored Products:', storedProducts);
            alert('Item added to your cart successfully.');
        }
    };

    return (
        <div className='text-dark'>
            <section className='container' style={{ marginTop: "5rem" }}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <h1 className='text-center'>Our Products</h1>
                    </div>
                    {products && products.map((product) => (
                        <div className="card shadow border-primary col-2 products" key={product.id} style={{ width: '15.8rem', margin: '1rem' }}>
                            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                                <img className="card-img-top mb-3 border-bottom" src={product.imgUrl} alt="Card image cap" />
                                <h5 className="card-title text-dark">{product.name}</h5>
                                <h5 className="card-title text-dark mb-3">Price: {product.price} $</h5>
                                <div className="d-flex">
                                    <Link to={`/product/${product.id}`} className='btn btn-outline-primary me-1'>Details</Link>
                                    <button className="btn btn-outline-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
