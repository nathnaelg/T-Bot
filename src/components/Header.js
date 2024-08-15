'use client';

import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#4C0099', color: 'white' }} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {currentUser ? (
              <>
                <Button color="inherit" component={Link} href="/dashboard" sx={{ fontFamily: 'Georgia, serif' }}>
                  Dashboard
                </Button>
                <Button color="inherit" onClick={handleLogout} sx={{ fontFamily: 'Georgia, serif' }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} href="/auth/login" sx={{ fontFamily: 'Georgia, serif' }}>
                  Login
                </Button>
                <Button color="inherit" component={Link} href="/auth/signup" sx={{ fontFamily: 'Georgia, serif' }}>
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
