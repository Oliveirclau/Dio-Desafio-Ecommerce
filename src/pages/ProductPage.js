import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axiosConfig';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/produtos/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the product!', error);
            });
    }, [id]);

    const addToCart = () => {
        const cartItem = { ...product, quantity };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Produto adicionado ao carrinho!');
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.nome}</h2>
            <p>{product.descricao}</p>
            <p>Preço: {product.preco}</p>
            <div>
                <label>Quantidade: </label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                />
            </div>
            <button onClick={addToCart}>Adicionar ao Carrinho</button>
        </div>
    );
}

export default ProductPage;
