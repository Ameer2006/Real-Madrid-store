import React from 'react';
import { Link } from 'react-router-dom';


export default function Cart() {
    const storedProducts = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalPrice = storedProducts.reduce((acc, product) => acc + product.price, 0);


    const clearCart = () => {
        localStorage.removeItem('cartItems');
        console.log('Cart cleared.');
        window.location.reload();
    };

    return (
        <div className='container' style={{ marginTop: "5rem" }}>
            <h2 className='d-flex justify-content-center'>Your Shopping Cart</h2>
            <ul className="list-group">
                {Array.isArray(storedProducts) && storedProducts.length > 0 ? (
                    storedProducts.map((product, index) => (
                        <li className="list-group-item" key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: 'auto' }}>
                                <h4>{product.name}</h4>
                                <h6>Price: {product.price} $</h6>
                            </div>
                            <img src={product.imgUrl} alt="img" style={{ marginLeft: 'auto', width: '75px', height: 'auto' }} />
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">Your cart is empty.</li>
                )}
            </ul>
            <div className='col-4 d-flex mt-4' style={{ height: "37px" }}>
                <Link className="btn btn-primary me-4" to='/pay'>Total Price: {totalPrice} $</Link>
                <Link className="btn btn-danger" type="submit" onClick={clearCart}>Clear Cart</Link>
            </div>
        </div>
    );
}
