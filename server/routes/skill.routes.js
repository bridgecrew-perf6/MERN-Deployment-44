const SkillController = require('../controllers/skill.controller')


module.exports=(app)=>{
    console.log('looking for skill');
    
     //insert many skills at once
    app.post('/api/skillsAll',SkillController.addAllSkills)
    //add a Skill to the database
    app.post('/api/skills',SkillController.addSkill)
    //get all Skills from the database
    app.get('/api/skills',   SkillController.getSkills)
    //get one Skill by ID
    app.get('/api/skills/:id',SkillController.getOneSkill)
    //update the Skill by ID
    app.put('/api/skills/:id',SkillController.updateSkill)
    //delete by an id
    app.delete('/api/skills/:id',SkillController.deleteSkill)
   
    
}