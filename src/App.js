// import { useState } from 'react';

// import { Typography, styled } from '@mui/material';
// import './App.css';

// import Balance from './Components/Balance';
// import ExpenseCard from './Components/ExpenseCard';
// import Transactions from './Components/Transactions';
// import NewTransaction from './Components/NewTransaction';



// const Header = styled(Typography)`
//   margin: 10px 40px;
//   color: #021406cf;
//   font-size: 41px;
//   text-transform: uppercase;
 
//   margin: 20px;

// `



// function App() {

//   const [transactions, setTransactions] = useState([
//     { id: 1, text: 'Momos', amount: -20 },
//     { id: 2, text: 'Salary', amount: 3000 },
//     { id: 3, text: 'Book', amount: -100 },
//     { id: 4, text: 'Bonus', amount: 1500 },
//   ]);

//   const deleteTransaction = (id) => {
//     console.log(id);
//     setTransactions(transactions.filter(transaction => transaction.id !== id));
//     console.log(transactions);
//   }

//   const addTransaction = (transaction) => {
//     setTransactions(transactions => [transaction, ...transactions]);
//     console.log(transaction);
//     console.log(transactions);
//   }


//   return (


//     <div className="main-app" >

//       <Header className='header'>Expense Tracker</Header>
//       <div className="raj">
//         <div className="shadow">
//           <Balance transactions={transactions} />
//           <ExpenseCard transactions={transactions} />
//           <NewTransaction addTransaction={addTransaction} />
//         </div>
//         <div className="shadow">
//           <Transactions transactions={transactions} deleteTransaction={deleteTransaction} />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;





import { useState } from 'react';
import { Typography, styled } from '@mui/material';
import './App.css';

import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import Transactions from './Components/Transactions';
import NewTransaction from './Components/NewTransaction';


const Header = styled(Typography)(({ theme }) => ({
    margin: '20px',
    color: '#004d40',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '2px',
}));

const AppContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: '20px',
});

const Section = styled('div')({
    width: '100%',
    maxWidth: '800px',
    background: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    padding: '20px',
});

function App() {
    const [transactions, setTransactions] = useState([
        { id: 1, text: 'Momos', amount: -20 },
        { id: 2, text: 'Salary', amount: 3000 },
        { id: 3, text: 'Book', amount: -100 },
        { id: 4, text: 'Bonus', amount: 1500 },
    ]);

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };

    const addTransaction = (transaction) => {
        setTransactions(transactions => [transaction, ...transactions]);
    };

    return (
        <AppContainer>
            <Header>Expense Tracker</Header>
            <Section>
                <Balance transactions={transactions} />
                <ExpenseCard transactions={transactions} />
                <NewTransaction addTransaction={addTransaction}  />
            </Section>
            <Section>
                <Transactions transactions={transactions} deleteTransaction={deleteTransaction} />
            </Section>

          
        </AppContainer>








    );
}

export default App;



