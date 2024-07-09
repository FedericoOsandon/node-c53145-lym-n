export class DaoMongo {
    constructor(model){
        this.model = model
    }

    getAll = async () => await this.model.find({})
    get    = async (filter) => await this.model.findOne(filter) 
    create = ()=>{} 
    update = ()=>{} 
    delete = ()=>{} 
}