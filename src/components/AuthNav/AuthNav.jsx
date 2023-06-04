import { HowToReg } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import { MenuLink, MenuLinkContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <MenuLinkContainer>
      <MenuLink to="/register">
        <HowToReg sx={{ color: '#fff', pr: 1, mt: 0.5 }} />
        Register
      </MenuLink>

      <MenuLink to="/login">
        <LoginIcon sx={{ color: '#fff', pr: 1, mt: 0.5 }} />
        Log In
      </MenuLink>
    </MenuLinkContainer>
  );
};
