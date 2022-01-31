const PetController = require('../controllers/Pet.controller')


module.exports=(app)=>{
    console.log('looking for route');
    //add a Pet to the database
    app.post('/api/pets',PetController.addPet)
    //get all Pets from the database
    app.get('/api/pets',   PetController.getPets)
    //get one Pet by ID
    app.get('/api/pets/:id',PetController.getOnePet)
    //update the Pet by ID
    app.put('/api/pets/:id',PetController.updatePet)
    //delete by an id
    app.delete('/api/pets/:id',PetController.deletePet)
}