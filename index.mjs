import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import db from './db/conn.mjs';

import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';

import boyRoutes from './controllers/boy.mjs';
import girlRoutes from './controllers/girl.mjs';
import userRoutes from './controllers/user.mjs';


// creating express application and other variables
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

// Set up view engine
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use("/boys", boyRoutes);
app.use("/girls", girlRoutes);
app.use("/users", userRoutes);


// Root route for all boys, girls and users all together
app.get('/', (req, res) => {
    res.send(
        `<div> 'Welcome to my Soccer Team Project! '<br><br />
        <a href='/boys'>Boys</a><br><br />
        <a href='/girls'>Girls</a></div> <br><br />
        <br /><a href='/users'>Users</a></div>`
        );
});

app.listen(PORT, () => {
    console.log(`listening`);
});