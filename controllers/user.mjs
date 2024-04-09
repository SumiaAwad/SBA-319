import express from 'express';
const router = express.Router();
import User from '../models/user.mjs';
import db from '../db/conn.mjs';

// These are my routes
// We are going to create the 7 RESTful routes
// There is an order for them to listed in the code
// I - N - D - U - C - E - S
//  Action      HTTP Verb   CRUD 
// I - Index    GET         READ - display a list of elements
// N - New      GET         CREATE * - but this allows user input
// D - Delete   DELETE      DELETE
// U - Update   PUT         UPDATE * - this updates our database
// C - Create   POST        CREATE * - this adds to our database
// E - Edit     GET         UPDATE * - but this allows user input
// S - Show     GET         READ - display a specific element

// seed route
router.get("/new", async (req, res) => {
    console.log('in new');
    try {
        await User.create([
            {
                name: 'Amin Mohamed',
                email: "amin@email.com",
                phoneNumber: "6149893977"
            }, 
            {
                name: 'lamin Yamal',
                email: "lamin@email.com",
                phoneNumber: "6149893977"
            }, 
            {
                name: 'James Moller',
                email: "james@email.com",
                phoneNumber: "6149893977"
            }
        ])
        res.status(200).redirect('/users');
    } catch (err) {
        res.status(400).send(err);
    }
});

//I -Index-GET-READ-display a list of elements
router.get('/', async (req, res) => {
    console.log("user");
    try {
        const foundUsers = await User.find({});
        res.status(200).render('users/Index', { users: foundUsers})
        //res.status(200).send(foundPrinces);///////check this line in all controllers b4 running
    } catch (err) {
        res.status(400).send(err);
    }
})

// I am starting with my post route so that I can see the things in my database
router.post('/', async(req, res) => {
    console.log(req.body)

    try {
        const createdUser = await User.create(req.body);
        res.status(200).send(createdUser);
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;