import { Container } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Title } from 'pages/Titled.styled';

const Register = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        pt: 10,
        pb: 2,
      }}
      maxWidth="xl"
    >
      <Title>Registration</Title>
      <RegisterForm />
    </Container>
  );
};

export default Register;
