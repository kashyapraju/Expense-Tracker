// import { useState } from 'react';
// import { Typography, Box, TextField, Button, styled } from '@mui/material';

// const Container = styled(Box)`
//     display: flex;
//     flex-direction: column;
//     & > h5, & > div, & > button {
//         margin-top: 30px
//     }
// `;

// const StyledButton = styled(Button)`
//     background: #445A6F;
//     color: #fff;
// `;

// const NewTransaction = ({ addTransaction }) => {
//     const [text, setText] = useState('');
//     const [amount, setAmount] = useState();

//     const newTransaction = e => {
//         const transaction = {
//             id: Math.floor(Math.random() * 100000000),
//             text: text,
//             amount: +amount
//         }
//         addTransaction(transaction);
//     }
    
//     return (

       
//         <Container>
//             <Typography variant="h5">New Transaction</Typography>
//             <TextField value={text} label="Enter Expense" onChange = {(e) => setText(e.target.value)} />
//             <TextField value={amount} label="Enter Amount (Expense=(-))" onChange = {(e) => setAmount(e.target.value)}  />
//             <StyledButton variant="contained" onClick={newTransaction}>Add Transaction</StyledButton>
//         </Container>
//     )
// }

// export default NewTransaction;







import { useState } from 'react';
import { Typography, Box, TextField, Button, styled, Card, CardContent } from '@mui/material';
import Transactions from './Transactions';


const StyledCard = styled(Card)`
    margin-top: 20px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    background-color: #f7f9fc;
`;

const StyledTextField = styled(TextField)`
    margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
    background: #1976d2;
    color: #fff;
    padding: 10px 20px;
    &:hover {
        background: #115293;
    }
`;

const NewTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const newTransaction = () => {
        if (!text || !amount) {
            alert('Please fill out both fields.');
            return;
        }

        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount,
        };
        addTransaction(transaction);
        setText('');
        setAmount('');
    };

    return (
        <StyledCard>
            <CardContent>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#444' }}>
                    New Transaction
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <StyledTextField
                        value={text}
                        label="Enter Expense"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <StyledTextField
                        value={amount}
                        label="Enter Amount (Expense = Negative)"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <StyledButton
                        fullWidth
                        variant="contained"
                        onClick={newTransaction }
                    >
                        Add Transaction
                    </StyledButton>

                    

                </Box>
            </CardContent>
        </StyledCard>
    );
};

export default NewTransaction;
