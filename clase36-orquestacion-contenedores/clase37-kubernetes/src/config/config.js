const {connect} = require("mongoose")
require('dotenv').config()

const mongo_url = process.env.MONGO_URL || 'mongodb://localhost:27017/comision32270'
// console.log('mongo_url: ', mongo_url)
module.exports = {
    dbConection: async ()=>{
        try {
            const conectDB = await connect(mongo_url)
            console.log(`DB conected`)
        } catch (error) {
            console.log(error)
        }
    }
}

