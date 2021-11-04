import express from 'express';

const app = express();
const port = 3333;

app.get( "/api", ( req, res ) => {
  return res.json({ version: 0.1 });
});

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );