const mongoose=  require('mongoose');
//********************************************************************** */
//update below as need for project chanig schema name , creation and export
//********************************************************************** */


const SkillSchema = new mongoose.Schema({
    skill:{
        type:String,
        required:[true,'Skill name is Required'],
        minlength:[3,"Skil must be at least 3 characters"]
    },
    petID:{
        type:String,
        required:[true,"What Skill must be associated with a pet - field required"],
    }
})

const Skill =  mongoose.model('Skill',SkillSchema)

module.exports = Skill;