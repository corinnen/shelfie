const express = require ('express');
const bodyParser = require ('body-parser');
const massive = require ('massive');
require ('dotenv').config();
const controller = require ('./controller');
const app = express();
const port = 5000;
const {APP_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    app.set('db', db)
}).catch (err => {
    console.error('there was an error connecting to db', err)
})

app.use(bodyParser.json());

app.get('/api/inventory', controller.read)
app.post('/api/inventory', controller.addProduct)
app.put('/api/inventory/:id', controller.update)
app.delete('/api/inventory/:id', controller.delete)

app.listen(APP_PORT, () => {
    console.log('listening on port', APP_PORT)
});
