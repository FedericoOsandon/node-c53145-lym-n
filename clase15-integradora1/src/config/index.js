const { connect } = require('mongoose')

exports.connectDB = () => {
    // mongodb+srv://Federico:password@coderexample.hjzrdtr.mongodb.net/c53145?retryWrites=true&w=majority
    connect('mongodb://127.0.0.1:27017/c53145')
    console.log('DB conected')
} 


// module.exports = {
//     this.connectDB
// }