let doButton = document.querySelector(`#do`);
let eatButton = document.querySelector(`#eat`);
let seeButton = document.querySelector(`#see`);
let learnButton = document.querySelector(`#learn`);
let askButton = document.querySelector(`#ask`);
let dogButton = document.querySelector(`#dog`);
let container = document.querySelector(`#container`)

let PORT = 5010;

// var index = Data.map(function(e) { return e.name; }).indexOf('Nick');

const addCard = async (src) => {
    const card = document.createElement('div');
    
    if (typeof src.url !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">${src.url}</p>`
        // temp.innerHTML = `<iframe src="${src.url}" width="700px" frameborder="0"></iframe>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.answer !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">answer (hover to show ↓):</p>
        <p class="text answer">${src.answer}</p>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.question !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">question: ${src.question}</p>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.title !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">title: ${src.title}</p>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.price !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">Price (1-10): ${src.price}</p>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.text !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">${src.text}</p>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }
    if (typeof src.fact !== `undefined`) {
        const temp = document.createElement('div')
        temp.innerHTML = await `<p class="text">${src.fact}</p>`
        card.insertAdjacentElement(`afterbegin`, temp)
    }

    container.insertAdjacentElement(`afterbegin`, card)
}

doButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/do/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


eatButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/eat/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


seeButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/see/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


learnButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/learn/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


askButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/ask/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});


dogButton.addEventListener('click', async () => {
    await axios.get(`http://localhost:${PORT}/dog/`)
    .then((res) => {
        console.log(res.data)
        addCard(res.data)
    })
    .catch(err => console.log(err))
});