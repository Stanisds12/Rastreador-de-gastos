import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import ExpensesIncome from './components/ExpensesIncome'
import './App.css';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <ExpensesIncome />
        <TransactionList />
        <AddTransaction/>
      </div>
      
    </GlobalProvider>
  );
}

export default App;
