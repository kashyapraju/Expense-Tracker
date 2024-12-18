
// import { Typography, styled, Box } from '@mui/material';





// const BalanceText = styled(Typography)`
//     font-size: 25px;
//     margin-bottom: 20px;
// `

// const Balance = ({ transactions }) => {
    
//     const amount = transactions.map(transaction => transaction.amount);
//     const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
    
//     return (
//         <Box>
//             <BalanceText >Balance: ₹{total}</BalanceText>
          
//         </Box>
//     )
// }

// export default Balance;




import { Typography, styled, Box, Card, CardContent } from '@mui/material';

const StyledCard = styled(Card)`
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    background-color: #f8f9fa;
    padding: 10px;
`;

const BalanceText = styled(Typography)`
    font-size: 1.8rem;
    font-weight: 600;
    color: #004d40;
    text-align: center;
    margin-bottom: 10px;
`;

const Subtitle = styled(Typography)`
    font-size: 1rem;
    font-weight: 400;
    color: #757575;
    text-align: center;
`;

const Balance = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

    return (
        <StyledCard>
            <CardContent>
                <BalanceText>₹{total}</BalanceText>
                <Subtitle>Your Total Balance</Subtitle>
            </CardContent>
        </StyledCard>
    );
};

export default Balance;
