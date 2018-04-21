const { createHandler } = require("azure-function-express");
const express = require("express");

const app = express();
app.get("/api/:foo/:bar", (req, res) => {
    res.json({
        foo: req.params.foo,
        bar: req.params.bar
    });
});

app.get('/api/list', (req, res) => {
    res.json({
        status: true,
        message: [{
            name: 'Matheus Donizete',
            lastName: 'Matos'
        },{
           name: 'Matheus',
           lastName: 'Vieira' 
        },
        {
            name: 'Matheus',
            lastName: 'Gontijo' 
         }]
    });
});

app.use(express.static(`${__dirname}/static`));

module.exports = createHandler(app);