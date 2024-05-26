import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';

function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.preco * item.quantity, 0);
    };

    if (cart.length === 0) return <div>O carrinho está vazio.</div>;

    return (
        <div>
            <h2>Carrinho de Compras</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.nome} - {item.preco} x {item.quantity}
                        <button onClick={() => removeFromCart(index)}>Remover</button>
                    </li>
                ))}
            </ul>
            <p>Total: {getTotal()}</p>
            <Link to="/checkout">
                <button>Finalizar Compra</button>
            </Link>
        </div>
    );
}

export default CartPage;
