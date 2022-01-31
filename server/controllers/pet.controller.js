const Pet = require('../models/pet.model');

module.exports.addPet = ((req,res)=>{  
    console.log('adding Pet');
    Pet.create(req.body)
    .then(addedPet=>{
        res.json({result:addedPet});
    })
    .catch(err=>res.json({message:'controller error adding Pets',error:err}))

})

module.exports.getPets =((req,res)=>{
    console.log("Getting Pets");
    Pet.find()
    .then(allPet=>{
        res.json({result:allPet});
    })
    .catch(err=>res.json({message:'controller error getting all Pets',error:err}))

})

module.exports.getOnePet =((req,res)=>{
    console.log("Getting One Pet");
    Pet.findOne({_id:req.params.id})
    .then(aPet=>{
        res.json({result:aPet});
    })
    .catch(err=>{res.json({message:'controller faild to find by ID',error:err})})
})

module.exports.updatePet = ((req,res)=>{
    console.log("Updating Pet");
    Pet.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(changedPet=>{
       res.json({result:changedPet});
    })
    .catch(err=>{res.json({message:"controller faild to update",error:err})})
})

module.exports.deletePet = ((req,res)=>{
    console.log("Deleting Pet");
    Pet.findOneAndDelete({_id:req.params.id})
    .then(delPet=>{
        res.json({result:delPet})
    })
    .catch(err=>{res.json({message:"controller faild to delete",error:err})})
})