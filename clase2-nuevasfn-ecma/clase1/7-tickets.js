class TicketManager {
    #precioBaseGanancia = 0.15 
    constructor() {
        this.eventos = []
    }

    getEventos = () => this.eventos
    agregarEvento = (nombre, lugar, precio, capacidad=50, fecha= Date()) => {
        const evento = {
            nombre,
            lugar,
            precio: precio*this.#precioBaseGanancia,
            capacidad,
            fecha
        }

        if (this.eventos.length === 0) {
            evento.id = 1
        } else {
            // array[pos] [ {evento1: 646, id: 1} ]
            
            evento.id = this.eventos[this.eventos.length - 1].id + 1
            
        }
        this.eventos.push(evento) 
        logger.info(this.eventos)
    } 

    agregarUsuario(eid, uid){
        // validación que existe el evento
        const eventoIndex = this.eventos.findIndex(evento => evento.id === eid)
        if (eventoIndex === -1 ) {
            return `El evento no existe`
        }
        // validar que en el evento no esté registrado el usuario
        const resultUser = this.eventos[eventoIndex].participantes.includes(uid) // true - false      
        if (resultUser) {
            return `El usuaiorio ya esta registrado en el evento`
        }

        this.eventos[eventoIndex].participantes.push(uid)
        return `El usuario fué registrado con éxito`
    }

    ponerEventoEnGira(eid, nuevaLocalidad, nuevaFecha){
        const eventoIndex = this.eventos.findIndex(evento => evento.id === eid)
        if (eventoIndex === -1) {
            return `No existe el evento`
        }

        const evento = this.eventos[eventoIndex]
        const newEvento = {
            ...evento,
            id: this.eventos.length+1,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            participantes: []
        }
        this.eventos.push(newEvento)
        return `nuevo evento creado`
    }
     
}

const ticketManager = new TicketManager()
ticketManager.agregarEvento('fede', 'lugar', 1500)
ticketManager.agregarEvento('fede', 'lugar', 1500)

// logger.info()

