import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

function HomePage() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('/api/produtos')
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - {produto.preco}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
