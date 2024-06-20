const socket = io()

let user
let chatbok = document.getElementById('chatbox')

Swal.fire({
    title: 'Identifícate',
    input: 'text',
    text: 'Ingresar un usuario para identificarte.',
    // icon: 'success',
    inputValidator: value => { 
        return !value && 'Necesitas escribir un nombre de usuario para continuar.!! '
    },
    allowOutsideClick: false
}).then( resultado => {
    user = resultado.value
   socket.emit('authenticated',user)
})  

const handleSocket = evt => {
    if(evt.key === "Enter") {
        if (chatbok.value.trim().length > 0) {
            socket.emit('message', {
                user,
                message: chatbok.value
            })
            chatbok.value = ''
        }
    }
}

chatbok.addEventListener('keyup', handleSocket)

socket.on('messageLogs', data => {
    let log = document.getElementById('messageLogs')
    let messages = ''
    data.forEach(mensajes => {
        messages = messages + `<li>${mensajes.user} dice: ${mensajes.message}</li><br>`
    });
    log.innerHTML = messages
})

socket.on('newUserConnected', data => {
    
    if(!user) return 
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 10000,
        title: `${data} sea unido al chat`,
        icon: "success"
    })
})



