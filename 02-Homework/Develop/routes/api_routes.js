const { model } = require("mongoose");
var db = require("../models");

model.exports = function(app){
    app.get("/api/workouts", function(req, res){
        db.workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workout/:id", function({body, params}, res){
        db.workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            {new: true}
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", (req, res)=> {
        db.workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", function(req, res){
        db.workout.find({}).limit(5)
            .then(dbWorkout => {
                res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
}