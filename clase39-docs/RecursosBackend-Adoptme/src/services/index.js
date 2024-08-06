const Users = require( "../dao/Users.dao.js")
const Pet = require( "../dao/Pets.dao.js")
const Adoption = require( "../dao/Adoption.js")

const UserRepository = require( "../repository/UserRepository.js")
const PetRepository = require( "../repository/PetRepository.js")
const AdoptionRepository = require( "../repository/AdoptionRepository.js")

exports.usersService = new UserRepository(new Users())
exports.petsService = new PetRepository(new Pet())
exports.adoptionsService = new AdoptionRepository(new Adoption())
