require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes =  require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTINGSTRING, {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
    .then(() => {
        console.log('DataBase MongoDB Connected!!');
        app.emit('ready');
    })
    .catch(e => console.log(e));

app.use(cors()); //Nos informa quais domínios estão consumindo os dados da API
app.use(cookieParser());
app.use(express.json()); //Para receber e enviar Json do front para o backend
app.use(routes); 

app.on('ready', () => {
    app.listen(port, function(){
        console.log(`Server runing on port ${port}`)
    });
});