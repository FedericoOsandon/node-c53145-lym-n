class ClassRepository {
    constructor(dao){
        this.dao = dao
    }

    getItem = async filter => await this.dao.getBy(filter) 
    getItems = async _ => await this.dao.getAll()
    createItems = async newItem => await this.dao.create(newItem)
    updateItems = async (id, itemUpdate) => this.dao.update(id, itemUpdate)
    deleteItems = async id => this.dao.delete(id)
}

module.exports = {
    ClassRepository
}