const express = require('express')
const axios = require('axios')
const app = express();
const cors = require('cors');
const https = require('https');

const agent = new https.Agent({rejectUnauthorized: false});
app.use(cors({origin: '*'}))
app.use(express.json());

const PORT = 5005;

// DO SOMETHING
let boredAPI = `https://www.boredapi.com/api/activity/`;
let activity = {};

axios.get(boredAPI, { httpsAgent: agent })
    .then(async (res) => {
        activity = {
            "activity": await res.data.activity,
            "price(1-10)": await (res.data.price) * 10
        }
    })
    .catch((err) => console.log(err));

app.get(`/do`, (req, res) => {

        axios.get(boredAPI, { httpsAgent: agent })
        .then(async (res) => {
            activity = {
                "activity": await res.data.activity,
                "price(1-10)": await (res.data.price) * 10
            }
        })
        .catch((err) => console.log(err));
    
        res.status(200).send(activity);
});

// EAT SOMETHING
let eatAPI = `https://foodish-api.herokuapp.com/api/`;
let eatURL = ``;

axios.get(eatAPI, { httpsAgent: agent })
    .then(async (res) => {
        eatURL = await res.data.image
    })
    .catch((err) => console.log(err))

app.get(`/eat`, (req, res) => {
    axios.get(eatAPI, { httpsAgent: agent })
        .then(async (res) => {
            eatURL = await res.data.image
        })
        .catch((err) => console.log(err))

    res.status(200).send(eatURL)
})

// SEE SOMETHING
let gifAPI = `https://api.giphy.com/v1/gifs/random?api_key=kHX6KWFVTA4CpWm45qGS08UezlRaAOrw&limit=1&tag=funny+kid`
let gifURL = ``;

axios.get(gifAPI, { httpsAgent: agent })
    .then(async (res) => {
        gifURL = res.data.data.images.original.mp4;
    })
    .catch((err) => console.log(err))

app.get(`/see`, (req, res) => {
    axios.get(gifAPI, { httpsAgent: agent })
        .then(async (res) => {
            gifURL = res.data.data.images.original.mp4;
        })
        .catch((err) => console.log(err))

    res.status(200).send(gifURL)
})

// LEARN SOMETHING
let adviceAPI = `https://api.adviceslip.com/advice`
let advice = ``;

axios.get(adviceAPI, { httpsAgent: agent })
    .then(async (res) => {
        advice = res.data.slip.advice;
    })
    .catch((err) => console.log(err))

app.get(`/learn`, (req, res) => {
    axios.get(adviceAPI, { httpsAgent: agent })
        .then(async (res) => {
            advice = res.data.slip.advice;
        })
        .catch((err) => console.log(err))

    res.status(200).send(advice)
})

// ASK SOMETHING
let triviaAPI = `https://jservice.io/api/random`
let trivia = {};

axios.get(triviaAPI, { httpsAgent: agent })
    .then(async (res) => {
        trivia = {
            title: res.data[0].category.title,
            question: res.data[0].question,
            answer: res.data[0].answer
        }
    })
    .catch((err) => console.log(err))

app.get(`/ask`, (req, res) => {
    axios.get(triviaAPI, { httpsAgent: agent })
        .then(async (res) => {
            trivia = {
                title: res.data[0].category.title,
                question: res.data[0].question,
                answer: res.data[0].answer
            }
        })
        .catch((err) => console.log(err))

    res.status(200).send(trivia)
})

// DOG
let dogFactAPI = `https://dog-api.kinduff.com/api/facts`;
let dogPicAPI = `https://random.dog/woof.json?ref=publicapis.dev`;
let dog = {
    fact: ``,
    picture: ``
};

axios.get(dogFactAPI, { httpsAgent: agent })
    .then(async (res) => {
        dog.fact = await res.data.facts[0]
    })
    .catch((err) => console.log(err))

axios.get(dogPicAPI, { httpsAgent: agent })
    .then(async (res) => {
        dog.picture = await res.data.url
    })
    .catch((err) => console.log(err))

app.get(`/dog`, (req, res) => {
    axios.get(dogFactAPI, { httpsAgent: agent })
        .then(async (res) => {
            dog.fact = await res.data.facts[0]
        })
        .catch((err) => console.log(err))

    axios.get(dogPicAPI, { httpsAgent: agent })
        .then(async (res) => {
            dog.picture = await res.data.url
        })
        .catch((err) => console.log(err))

    res.status(200).send(dog)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});