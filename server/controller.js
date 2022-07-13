const data = require('./db.json') 
let globalId = 5
module.exports = {
    getBoards: (req, res) => {
        res.status(200).send(data)
    },
    createBoards: (req, res) => {
        const {address, price, imageURL} = req.body
        let newBoard = {
            id: globalId,
            address,
            price:+price,
            imageURL,
        }
        data.push(newBoard)
        res.status(200).send(data)
        globalId++;
    }
    
}