const Schedule = require("../models/schedule.model");

class ScheduleController {
    create(req, res){
        const newsched = new Schedule(req.body);
        newsched.save()
            .then( () => res.json(newsched))
            .catch(errors => res.json(errors));
    }
    getAll(req,res){
        Schedule.find().sort("start")
            .then( sched => res.json(sched))
            .catch(errors => res.json(errors));
    }
    getone(req,res){
        Schedule.findOne({_id: req.params._id})
            .then(item => res.json(item))
            .catch(error => res.json(errors))
    }
    update(req,res){
        Schedule.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({msg: "ok"}))
            .catch(errors => res.json(errors))
    }
    remove(req,res){
        Schedule.findByIdAndDelete({_id: req.params._id})
        .then( () => res.json({msg: "ok"}) )
        .catch( errors => res.json(errors) );
    }
    //rand
}
module.exports = new ScheduleController();