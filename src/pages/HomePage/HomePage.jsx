import { Container, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Main } from 'pages/Titled.styled';

export const HomePage = () => {
  return (
    <Main>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 4,
          pb: 4,
        }}
        maxWidth="xl"
      >
        <ContactPhoneIcon sx={{ fontSize: 80, mb: 3, color: '#0f7ec9' }} />
        <Typography
          variant="h1"
          sx={{
            fontStyle: 'italic',
            fontFamily: 'monospace',
            fontSize: '24px',
            fontWeight: '700',
          }}
        >
          Welcome to your <span style={{ color: '#0f7ec9' }}>Phonebook</span>{' '}
          application!
        </Typography>
      </Container>
    </Main>
  );
};

export default HomePage;
