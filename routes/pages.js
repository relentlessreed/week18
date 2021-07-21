// const router = require("express").Router();
// const path = require("path");

// //This is one spot where we will use the aggregate function

// router.get("/api/workouts", (req, res) => {
//     Workout.aggegate([
//         {
//             $addFields: {
//                 totalDuration: { $sum: "$exercises.duration" }
//             }
//         }
//     ])
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// router.put("/api/workouts/:id", ({ body }, res) => {
//     Workout.create(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// router.post("/api/workouts", ({ body }, res) => {
//     Workout.insertMany(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// //This is another spot where we will use the aggregate function

// router.get("/api/workouts", (req, res) => {
//     Workout.aggegate([
//         {
//             $addFields: {
//                 totalDuration: { $sum: "$exercises.duration" }
//             }
//         }
//     ])
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// router.get("/api/workouts/range", (req, res) => {
//     Workout.find({})
//         .sort({ date: -1 })
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// // Needs to be modified still
// router.get("/api/workouts/stats", (req, res) => {
//     Workout.find({})
//         .sort({ date: -1 })
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// // Needs to be modified still
// router.get("/api/workouts/exercise", (req, res) => {
//     Workout.find({})
//         .sort({ date: -1 })
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// module.exports = router;