//const { default: axios } = require("axios")

const sendToHtml = document.getElementById('electronics-container')
const form = document.querySelector('#form1')
const baseURL = 'http://localhost:4004/api/data'

const dataCallback = ({ data: data}) => {
  console.log('dataCallBackHit')
  displayData(data)}
const errCallback = err => console.log(err)

const getAllProducts = () => axios.get(baseURL).then(dataCallback).catch(errCallback)
const createData = body=> axios.post(baseURL, body).then(dataCallback).catch(errCallback)
function createProduct(data) {
  const dataCard = document.createElement('div')
  dataCard.classList.add('data-card')

  dataCard.innerHTML = `<img alt='shoe cover image' src=${data.imageURL} class="shoe-cover-image"/>
  <p class="name1">${data.address}</p>
  <p class="shoe-price">$${data.price}</p>`

;

  sendToHtml.appendChild(dataCard)
}











function submitHandler(e) {
  e.preventDefault()
  let address = document.getElementById('address')
  let price = document.getElementById('price')
  let imageURL = document.getElementById('img')

  const body = {
      address: address.value,
      price: price.value, 
      imageURL: imageURL.value
  }

  createData(body)

  address.value = ''
  price.value = ''
  imageURL.value = ''
}




















function displayData(arr) {
    sendToHtml.innerHTML = ``

    for (let i = 0; i < arr.length; i++) {
        createProduct(arr[i])

    }
}

getAllProducts()

// if (form) {
  form.addEventListener("submit", submitHandler);
// }