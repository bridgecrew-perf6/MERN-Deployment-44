const mongoose=  require('mongoose');
//********************************************************************** */
//update below as need for project chanig schema name , creation and export
//********************************************************************** */


const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Pet name is Required'],
        minlength:[3,"Name must be at least 3 characters"]
    },
    type:{
        type:String,
        required:[true,"What kind of Pet is this - field required"],
        minlength:[3,'Type of pet must be least 3 characters']
    },
    description:{
        type:String,
        required:[true,'Description is Required - Tell us about your pet'],
        minlength:[3,"Must be at least  characters"]
    },
    skill1:{
        type:String
        },
    skill2:{
        type:String
    },
    skill3:{
        type:String
    }


})

const Pet =  mongoose.model('Pet',PetSchema)

module.exports = Pet;