const express = require("express"); const app = express(); app.get("/", (req, res) => { res.send("Express on Vercel"); }); const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./models/user');
const Quote = require('./models/quote');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const pass = process.env.MONGODB_PASS;

const uri = `mongodb+srv://ilonasegeda070191:${pass}@cluster0.x66in1l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const secret = "your_secret_secret";

app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10).then( hash => {
        const newUser = new User({
            email: req.body.email,
            password: hash,
        })

        newUser.save().then(result => {
            const token = jwt.sign({email: newUser.email, userId: result._id}, secret, {expiresIn: '1h'});
            res.status(200).send({message: 'User Created', email: result.email,  token: token});
        }).catch(err => {
            res.status(500).send({message: 'Something went wrong', error: err});
        })
    })
})

app.post('/login', (req, res) => {
    User.findOne({email: req.body.email}).then((user) => {
        if (!user) {
            res.status(404).send({message: 'User Not Found'});
        }

        bcrypt.compare(req.body.password, user.password).then( match => {
            if(!match){
                return res.status(401).send({message: 'Incorrect Password'});
            }

            const token = jwt.sign({email: user.email, userId: user._id}, secret, {expiresIn: '1h'});

            res.status(200).send({message: 'User logged in!', email: user.email, token: token});
        })
    }).catch(err => {
        res.status(500).send({message: 'Something went wrong', error: err});
    })
})

const authenticate = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            res.status(401).send({message: 'Incorrect Token'});
        }
        req.userData = decoded;
        next()
    })
}

app.get('/user/quotes', authenticate, (req, res) => {
    Quote.find({user: req.userData.userId}).then((quotes) => {
        res.status(200).json(quotes);
    }).catch(err => {
        res.status(500).send({message: 'Something went wrong', error: err});
    })
})

app.get('/user/quotes/:id', authenticate, (req, res) => {
    Quote.findById({_id: req.params.id}).then((quote) => {
        res.status(200).json(quote);
    }).catch(err => {
        res.status(500).send({message: 'Something went wrong', error: err});
    })
})

app.post('/user/quotes', authenticate, (req, res) => {
    const newQuote = new Quote({
        title: req.body.title,
        content: req.body.content,
        user: req.userData.userId
    })

    newQuote.save().then(result => {
        User.findById(req.userData.userId).then((user) => {
            user.quotes.push(result._id)
            user.save().then(() => {
                res.status(200).send({message: 'Quote saved successfully!', quote: result});
            }).catch(err => {
                res.status(500).send({message: 'Something went wrong', error: err});
            })
        }).catch(err => {
            res.status(500).send({message: 'Something went wrong', error: err});
        })
    }).catch(err => {
        res.status(500).send({message: 'Something went wrong', error: err});
    })
})


app.put(`/user/quotes`, authenticate, (req, res) => {
    const changedQuote = new Quote({
        _id: req.body.quote._id,
        title: req.body.quote.title,
        content: req.body.quote.content,
        user: req.userData.userId
    })
    const filter = { _id: req.body.quote._id };
    Quote.findOneAndUpdate(filter, changedQuote).then(result => {
        console.log(`Quote with id ${result._id} updated successfully`)
        res.status(200).send({message: 'Quote updated successfully!', quote: result});
    }).catch(err => {
        res.status(500).send({message: 'Something went wrong', error: err});
    })
})


app.delete(`/user/quotes/:id`, authenticate, (req, res) => {
    Quote.findByIdAndDelete(req.params.id)
        .then(result => {
            User.findById(req.userData.userId).then((user) => {
                const index = user.quotes.indexOf(req.params.id);
                user.quotes = user.quotes.splice(index, 1);
                user.save().then(() => {
                    res.status(200).send({message: 'Quote saved successfully!', quote: result});
                }).catch(err => {
                    res.status(500).send({message: 'Something went wrong', error: err});
                })
            }).catch(err => {
                res.status(500).send({message: 'Something went wrong', error: err});
            })
        }).catch(err => {
        res.status(500).send({message: 'Something went wrong', error: err});
    })
})

mongoose.connect(uri, {
    serverApi: {
        version: "1",
        strict: true,
        deprecationErrors: true
    }
}).then(() => app.listen(3000)).catch((error) => {
    console.error('Database error', error);
});
