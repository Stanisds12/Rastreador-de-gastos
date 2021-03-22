import React,{useContext} from 'react';
import Transactions from './Transactions'
import {GlobalContext} from '../context/GlobalState'

const TransactionList = () => {
    const {transaction}=useContext(GlobalContext)
    return (
        <>
            <h3>Historial</h3>
            <ul id="list" className="list">
                {transaction.map(trans => <Transactions transaction={trans} key={trans.id}/>)}
                
      </ul>
            
        </>
    );
}

export default TransactionList;
