const express = require('./node_modules/express');
const cors = require('./node_modules/cors');
const mongoose = require('./node_modules/mongoose');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middle Ware
app.use(cors());
app.use(express.json());

// Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established");
})

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

app.use('/posts', postsRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});