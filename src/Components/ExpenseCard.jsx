
// import { Card, CardContent, styled, Typography, Box } from '@mui/material';

// const Container = styled(Box)`
//     display: flex;
//     & > div {
//         flex: 1;
//         padding: 10px;
//     }
// `;

// const ExpenseCard = ({ transactions }) => {
    
//     const amount = transactions.map(transaction => transaction.amount);
//     const income = amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0).toFixed(2);
//     const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0) * -1).toFixed(2);
    
//     return (
//         <Container>
//         <Card>
//             <CardContent>
//                 <Typography>Income</Typography>
//                 <Typography style={{ color: 'green' }}>+₹{income}</Typography>
//             </CardContent>
//         </Card>
//         <Card>
//             <CardContent>
//                 <Typography>Expense</Typography>
//                 <Typography style={{ color: 'red' }}>-₹{expense}</Typography>
//             </CardContent>
//         </Card>
//     </Container>
//     )
// }

// export default ExpenseCard;




import { Card, CardContent, styled, Typography, Box } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: '20px',
    padding: '20px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
    flex: 1,
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    },
    backgroundColor: theme.palette.background.paper,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.2rem',
    marginBottom: theme.spacing(1),
}));

const AmountTypography = styled(Typography)(({ theme, color }) => ({
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.5rem',
    color: color,
}));

const ExpenseCard = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <Container>
            <StyledCard>
                <CardContent>
                    <StyledTypography>Income</StyledTypography>
                    <AmountTypography color="green">₹{income}</AmountTypography>
                </CardContent>
            </StyledCard>
            <StyledCard>
                <CardContent>
                    <StyledTypography>Expense</StyledTypography>
                    <AmountTypography color="red">₹{expense}</AmountTypography>
                </CardContent>
            </StyledCard>
        </Container>
    );
};

export default ExpenseCard;
