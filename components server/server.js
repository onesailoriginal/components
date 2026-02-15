const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

app.get('/loadDatas', (req, res) => {
  const Data = {
    data: 'ezvagyokenegyparafenomen',
    data2: 'nem szeretjuk a ciganyokat'
    };
    res.json(Data);
});

app.get('/loadDatasTwo', (req, res) => {
  const data = {
    imageUrl: 'https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg',
    listItems: ['Kutya 1', 'kutya 2', 'KUTYa 3']
    };
    res.json(data);
});
app.listen(port, () => {
    console.log(`Server fut a http://localhost:${port}`);
});