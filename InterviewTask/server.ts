
import bodyParser from 'body-parser';
import express from 'express';
import router from './router';

const app=express();

app.use('/',router)
.use(bodyParser.json())
app.listen('7070',()=>
{
   console.log ('service started');
});