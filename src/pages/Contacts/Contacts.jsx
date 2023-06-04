import { Container } from '@mui/material';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { ContactList } from 'components/ContactsList/ContactList';
import Filter from 'components/Filter/Filter';
import { Main } from 'pages/Titled.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // console.log(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 2,
          pb: 4,
        }}
        maxWidth="xl"
      >
        {isLoading && <div>Loading...</div>}
        <ContactAddForm />
        <Filter />
        <ContactList />
      </Container>
    </Main>
  );
}
