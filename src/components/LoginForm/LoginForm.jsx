import {
  Box,
  Button,
  Container,
  FormControl,
  // FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';
import { VisibilityOffSharp, VisibilitySharp } from '@mui/icons-material';
import { useState } from 'react';
import { BottomText, StyledLink } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const userInfo = {
      email: elements.email.value,
      password: elements.password.value,
    };
    dispatch(login(userInfo));
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '420px',
          textAlign: 'center',
          p: '10px',
          border: '2px solid #0f7ec9',
          bgcolor: '#fff',
          borderRadius: '20px',
        }}
      >
        <ContactPhoneIcon sx={{ color: '#fff', pr: 1, mt: 0.5 }} />
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AlternateEmailIcon sx={{ color: '#0f7ec9', mr: 1, mb: 1 }} />
            <TextField
              name="email"
              label="Email"
              required
              variant="standard"
              id="standard-basic"
              title="Email must contain at list '@'. For example user@mail.com"
              sx={{ m: 1, width: '100%' }}
            ></TextField>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <KeyIcon sx={{ color: '#0f7ec9', mr: 1, mb: 1 }} />
            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                label="Password"
                name="password"
                required
                id="standard-adornment-password"
                title="Your Password must include a minimum of 7 characters"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOffSharp sx={{ color: '#0f7ec9' }} />
                      ) : (
                        <VisibilitySharp />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Button type="submit" variant="contained">
            Log in
          </Button>
        </form>
        <BottomText>
          Don’t have an account yet?{' '}
          <StyledLink to="/register">Sign up</StyledLink>
        </BottomText>
      </Box>
    </Container>
  );
};
