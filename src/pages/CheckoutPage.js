import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useHistory } from 'react-router-dom';

function CheckoutPage() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit_card');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleCheckout = async (e) => {
        e.preventDefault();
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart || cart.length === 0) {
            setError('O carrinho está vazio.');
            return;
        }

        const order = {
            name,
            address,
            paymentMethod,
            items: cart,
        };

        try {
            await axios.post('http://localhost:8080/api/checkout', order);
            localStorage.removeItem('cart');
            history.push('/');
            alert('Compra finalizada com sucesso!');
        } catch (err) {
            setError('Houve um erro ao finalizar a compra. Tente novamente.');
        }
    };

    return (
        <div>
            <h2>Finalizar Compra</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleCheckout}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Endereço:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Método de Pagamento:</label>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="credit_card">Cartão de Crédito</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank_transfer">Transferência Bancária</option>
                    </select>
                </div>
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    );
}

export default CheckoutPage;
