import { useAuth } from '../../hooks/useAuth';
import { MenuLink } from './Navigation.styled';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <MenuLink to="/">
        <HomeIcon sx={{ color: '#fff', pr: 1, mt: 0.5 }} />
        Home
      </MenuLink>

      {isLoggedIn && (
        <MenuLink to="/contacts">
          <ImportContactsIcon sx={{ color: '#fff', pr: 1, mt: 0.5 }} />
          Contacts
        </MenuLink>
      )}
    </>
  );
};

export default Navigation;
