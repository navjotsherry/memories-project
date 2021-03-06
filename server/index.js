import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://navjotsherry:sherry@cluster0.7dzbd.mongodb.net/cluster0?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() =>app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}` )))
    .catch(() => console.log(error.message));