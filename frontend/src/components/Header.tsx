import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext"; // Corrected import
import NavigationLink from './shared/NavigationLink';

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "relative", boxShadow: "none" }}>
      <Toolbar sx={{ display: "relative", padding: "0", margin: "0" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg='#00fffc'
                to='/chat'
                text='Go to chat'
                textColor='black'
              />
              <NavigationLink
                bg='#51538f'
                textColor='white'
                to='/'
                text='Logout'
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg='#00fffc'
                to='/login'
                text='Login'
                textColor='white'
              />
              <NavigationLink
                bg='#ff0000'
                textColor='#000000'
                to='/signup'
                text='Signup'
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;