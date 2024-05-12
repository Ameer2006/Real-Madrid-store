import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:81/product/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        getProductDetails();
    }, [id]);

    const addToCart = () => {
        // Simulate adding product to cart (replace with actual logic)
        const selectedProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            imgUrl:product.imgUrl,
            // Add other product details as needed
        };
        let storedProducts = JSON.parse(localStorage.getItem('cartItems')) || [];
        storedProducts = Array.isArray(storedProducts) ? storedProducts : [];

        // Check if the selected product already exists in the cart
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
        <div className='container' style={{ marginTop: "7rem" }}>
            {product ? (
                <div className='card shadow border-primary mt-5' style={{ maxWidth: '47rem' }}>
                    <div className='row'>
                        <div className='col-md-6 '>
                            <img className='card-img-top ' src={product.imgUrl} alt='Product' />
                        </div>
                        <div className='col-md-6'>
                            <div className='card-body'>
                                <h1 className='card-title d-flex justify-content-center text-primary'>{product.name}</h1><br />
                                <h4 className='card-text'><span class="text-primary">Description:</span><br /> {product.description}</h4><br />
                                <h4 className='card-text'><span class="text-primary">Price: </span>{product.price} $</h4>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary d-flex  justify-content-center p-2 " onClick={addToCart} >Add to Shopping Cart</button>
                </div>
            )
                : ('Loading...')}
        </div>
    );
}
