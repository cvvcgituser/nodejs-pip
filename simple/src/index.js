const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hi ACS !,NodeJs App for test deployment in Amazon ECS');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
