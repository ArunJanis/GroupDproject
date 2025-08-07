const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/buy', (req, res) => {
  const { user, cart } = req.body;
  console.log(`Order from ${user}:`);
  console.log(cart);
  res.send('Received order of ' + cart.length + ' item(s)');
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

