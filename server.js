const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static(__dirname + '/public'))


app.listen(3000);





// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     // console.log(req.query);
//     // req.body
//     // console.log(req.headers);
//     // console.log(req.params);
//     // res.send('Getting Root');
//     res.status(404).send('Not Found');
// });


// app.get('/profile', (req, res) => {
//     res.send('Getting Profile');
// });

// app.post('/profile', (req, res) => {
//     console.log(req.body)
//     res.send('Success');
// });

// app.get('/', (req, res) => {
//     // const user = {
//     //     name: 'Sally',
//     //     hobby: 'Cooking'
//     // }
//     // res.send(user);
//     res.send('<h1>Getting Root</h1>');
// });

