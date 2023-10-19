const express = require('express');
const cors = require('cors')
const app = express();



app.use(
    cors({
        credentials: true,
        origin: true,
    })
);

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});






const user = require('./routes/userRouter');

app.use(express.json())

app.use('/api/v1', user);



module.exports = app;