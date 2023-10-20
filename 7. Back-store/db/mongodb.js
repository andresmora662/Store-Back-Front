const mongoose = require('mongoose')

const url = `mongodb+srv://mora798:kc2m3v2JhBxPnJdU@cluster0.8a45mwg.mongodb.net/`

// console.log(url)
mongoose.connect(url)
.then(()=>{
    console.log("Base de datos MongoDB conectada")
})
.catch((error)=>{
console.error(error)
})

module.exports = mongoose