let input = document.querySelector(`#input`);
let button = document.querySelector(`#button`);

let baseURL = `http://127.0.0.1:5500/public/index.html`
let destinationsURL = `https://atlas-obscura-api.herokuapp.com/api/atlas/destinations`


const getDestinations = () => {
    axios.get(`${destinationsURL}`)
        .then((res) => {
            console.log(res.data)
            // console.log(input.value)
        })
        .catch((err) => {
            console.error(err);
        })
}

button.addEventListener('click', getDestinations)