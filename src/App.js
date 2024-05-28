import { useState } from 'react';

import { Typography,  styled } from '@mui/material';
import './App.css';

import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import Transactions from './Components/Transactions';
import NewTransaction from './Components/NewTransaction';
import Raj from "./Components/Raj.css";
import Shadow from "./Components/Shadow.css";


const Header = styled(Typography)`
  margin: 10px 40px;
  color: #021406cf;
  font-size: 41px;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgb(5, 87, 31,1);
  margin: 20px;

`



function App() {
  
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: -20},
    { id: 2, text: 'Salary', amount: 3000},
    { id: 3, text: 'Book', amount: -100},
    { id: 4, text: 'Bonus', amount: 1500 },
  ]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }


  return (

   
    <div className="main-app" >
     
      <Header className='header'>Expense Tracker</Header>
      <div className = "raj">
        <div className = "shadow">
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction}/>
        </div>
        <div className = "shadow">
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </div>
      </div>

    </div>
  );
}

export default App;