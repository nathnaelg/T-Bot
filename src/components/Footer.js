import { Box, Typography, Container, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#4C0099', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontFamily: 'Georgia, serif' }} gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Georgia, serif' }}>
              We&apos;re on a mission to make AI-powered chatbots accessible to everyone.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontFamily: 'Georgia, serif' }} gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Georgia, serif' }}>
              Email: natk3y0@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontFamily: 'Georgia, serif' }} gutterBottom>
              Legal
            </Typography>
            <Link color="inherit" href="/privacy" sx={{ fontFamily: 'Georgia, serif' }}>
              Privacy Policy
            </Link>
            <br />
            <Link color="inherit" href="/terms" sx={{ fontFamily: 'Georgia, serif' }}>
              Terms of Service
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ fontFamily: 'Georgia, serif', mt: 5 }} align="center">
          © {new Date().getFullYear()} NATK3Y0 . All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
