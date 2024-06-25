

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Email Automation System
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              
            >
              
              <a style={{color:"white",textDecoration:'none'}} href="http://localhost:3000/auth/google" target='_blank'>
              Login with Google
          </a>
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 1, mb: 2 }}

              
            >
              <a style={{color:"white",textDecoration:'none'}} href="http://localhost:3000/auth/outlook" target='_blank'>
              Login with Outlook
          </a>
            </Button>
          </Box>
          <Link>
          <a href="http://localhost:3000/admin/queues" style={{color:"secondary",textDecoration:'none'}} target='_blank'>
            Go to Queues UI
          </a>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
