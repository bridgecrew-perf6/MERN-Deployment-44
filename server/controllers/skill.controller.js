const Skill = require('../models/skill.model');


module.exports.addAllSkills = ((req,res)=>{
    console.log('adding all skills');
    Skill.insertMany(req.body)   //pass it an array of objects representing the skill and ID
    .then(allSkills=>{
        console.log(allSkills);
        res.json({result:allSkills})
    })
})

module.exports.addSkill = ((req,res)=>{  
    console.log('adding Skill');
    Skill.create(req.body)
    .then(addedSkill=>{
        res.json({result:addedSkill});
    })
    .catch(err=>res.json({message:'controller error adding Skills',error:err}))

})

module.exports.getSkills =((req,res)=>{
    console.log("Getting Skills");
    Skill.find()
    .then(allSkill=>{
        res.json({result:allSkill});
    })
    .catch(err=>res.json({message:'controller error getting all Skills',error:err}))

})

module.exports.getOneSkill =((req,res)=>{
    console.log("Getting One Skill");
    Skill.findOne({_id:req.params.id})
    .then(aSkill=>{
        res.json({result:aSkill});
    })
    .catch(err=>{res.json({message:'controller faild to find by ID',error:err})})
})

module.exports.updateSkill = ((req,res)=>{
    console.log("Updating Skill");
    Skill.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(changedSkill=>{
       res.json({result:changedSkill});
    })
    .catch(err=>{res.json({message:"controller faild to update",error:err})})
})

module.exports.deleteSkill = ((req,res)=>{
    console.log("Deleting Skill");
    Skill.findOneAndDelete({_id:req.params.id})
    .then(delSkill=>{
        res.json({result:delSkill})
    })
    .catch(err=>{res.json({message:"controller faild to delete",error:err})})
})