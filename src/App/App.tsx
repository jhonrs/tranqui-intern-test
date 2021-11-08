import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, List, ListItem, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

function App() {

  const [names, setNames] = useState([]);

  useEffect(() => {

    const loadData = async () => {
      try {
        const res = await fetch('http://localhost:3333/api');
        const data = await res.json();
        setNames(data.names);
      } catch (error) {
        return console.error(error);

      }
    }

    const dataInterval = setInterval(loadData, 5000);
    loadData();
    return () => {
      clearInterval(dataInterval);
    }
  }, []);

  const handleNameClick = async (name: string) => {
    try {
      await fetch('http://localhost:3333/counter', {
        method: "PUT",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json"
        }

      });
    } catch (error) {
      return console.error(error);

    }
  }

  return (<>
    <CssBaseline />
    <Box bgcolor="#eeeeee" minHeight="100vh" p={4}>
      <Container maxWidth="sm">
        <Paper>
          <Box p={4}>
            <Typography variant="h4">People to click</Typography>
            <List>
              {names.map(({ name }) =>
                <ListItem button onClick={() => handleNameClick(name)} key={name}>{name}</ListItem>
              )}
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  </>);
}

export default App;
