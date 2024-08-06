const GenericRepository = require("./GenericRepository.js")

class AdoptionRepository extends GenericRepository {
    constructor(dao){
        super(dao);
    }
}

module.exports = AdoptionRepository