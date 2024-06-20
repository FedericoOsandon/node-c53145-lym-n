const generateUserErrorInfo = (user) => {
    console.log(user)
    return `One or more propierties were incomplete or not valid.
    List of require propierties:
    *first_name: nedds to be a String, recived ${user.first_name}
    *last_name : nedds to be a String, recived ${user.last_name }
    *email     : nedds to be a String, recived ${user.email}`
}
module.exports = { generateUserErrorInfo }                           