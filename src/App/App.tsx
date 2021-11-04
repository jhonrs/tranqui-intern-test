import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function App() {
  return (<>
    <CssBaseline />
    <Box bgcolor="#eeeeee" minHeight="100vh" p={4}>
      <Container maxWidth="sm">
        <Paper>
          <Box p={4}>
            <Typography variant="h4">People to click</Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  </>);
}

export default App;
