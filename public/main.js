let doButton = document.querySelector(`#do`);
let eatButton = document.querySelector(`#eat`);
let seeButton = document.querySelector(`#see`);
let learnButton = document.querySelector(`#learn`);
let askButton = document.querySelector(`#ask`);

let dogButton = document.querySelector(`#dog`);


doButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:5005/do/`)
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
});


eatButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:5005/eat/`)
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
});


seeButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:5005/see/`)
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
});


learnButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:5005/learn/`)
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
});


askButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:5005/ask/`)
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
});


dogButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:5005/dog/`)
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
});