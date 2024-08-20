const GenericRepository = require("./GenericRepository.js")

class PetRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }
}

module.exports = PetRepository