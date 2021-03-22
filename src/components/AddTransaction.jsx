import React, { useState,useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const enviarDatos = e => {
        e.preventDefault();
        const trans = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }
        addTransaction(trans)
    }
    return (
        <div>
            <h3>Add nueva transaccion</h3>
            <form onSubmit={enviarDatos}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder="Digita texto..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Cantidad<br />
            (negativo - gasto, positivo - ingreso)</label
                    >
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Digita cantidad..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
