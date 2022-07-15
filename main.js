//const { default: axios } = require("axios")

const sendToHtml = document.getElementById('electronics-container')
const form = document.querySelector('form')
const baseURL = `http://localhost:4004`

const dataCallback = ({ data: data}) => {
  
  displayData(data)}
const errCallback = err => console.log(err)

const getAllProducts = () => axios.get(baseURL+'/api/data').then(dataCallback).catch(errCallback)
const createData = body => axios.post(baseURL +'/api/adddata', body).then(dataCallback).catch(errCallback)
const deleteData = id => axios.delete(`${baseURL}/api/delete/${id}`).then(dataCallback).catch(errCallback)
function createProduct(data) {
  const dataCard = document.createElement('div')
  dataCard.classList.add('data-card')

  dataCard.innerHTML = `<img alt='board cover image' src=${data.imageURL} class="board-cover-image"/>
  <p class="name1">${data.address}</p>
  <p class="board-price">$${data.price}</p>
  <button class="deletebtn" onclick = "deleteData(${data.id})">Delete</button>
  `

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
