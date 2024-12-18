
// // right side portion 
// import { Typography, List, Divider, styled, Box } from '@mui/material';
// import Transaction from './Transaction';

// const Component = styled(Box)`
//     & > h5 {
//         margin-bottom: 10px;
//     }
// `;

// const Transactions = ({ transactions, deleteTransaction }) => {
    
//     return (
//         <Component>
//             <Typography variant="h5">Transaction History</Typography>
//             <Divider style={{width: '100%'}} />
//             <List>
//                 {
//                     transactions.map(transaction => {
//                         return <Transaction transaction={transaction} deleteTransaction={deleteTransaction} key={transaction.id} />
//                     })
//                 }
//             </List>
//         </Component>
//     )
// }

// export default Transactions;






import { Typography, List, Divider, styled,  Card, CardContent } from '@mui/material';
import Transaction from './Transaction';

const StyledCard = styled(Card)`
    margin-top: 20px;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    background-color: #f7f9fc;
`;

const HeaderText = styled(Typography)`
    font-size: 1.5rem;
    font-weight: 600;
    color: #444;
    margin-bottom: 10px;
    text-align: center;
`;

const StyledDivider = styled(Divider)`
    margin: 10px 0;
    background-color: #ddd;
`;

const Transactions = ({ transactions, deleteTransaction }) => {
    return (
        <StyledCard>
            <CardContent>
                <HeaderText>Transaction History</HeaderText>
                <StyledDivider />
                <List>
                    {transactions.map((transaction) => (
                        <Transaction
                            transaction={transaction}
                            deleteTransaction={deleteTransaction}
                            key={transaction.id}
                        />
                    ))}
                </List>
            </CardContent>
        </StyledCard>
    );
};

export default Transactions;
