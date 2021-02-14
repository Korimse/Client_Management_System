const express=require('express');
const bodyParser = require('body-parser');
const app =express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/any',
            'name': 'jane',
            'birthday':'19203',
            'gender':'Male',
            'job':'student'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/2',
            'name': 'Kane',
            'birthday':'15633',
            'gender':'Female',
            'job':'No'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/3',
            'name': 'Shane',
            'birthday':'123452',
            'gender':'Male',
            'job':'Pro'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));