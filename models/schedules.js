// Requiring our models as we've configured it
const db = require("../models");

// GET route for getting all of the schedules
app.get("/api/schedules", (req, res) => {
  const query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  db.Schedule.findAll({
    where: query
  }).then(dbSchedule => {
    res.json(dbSchedule);
  });
});

// Get route for retrieving a single Schedule
app.get("/api/Schedules/:id", (req, res) => {
  db.Schedule.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbSchedule => {
    console.log(dbSchedule);
    res.json(dbSchedule);
  });
});

// POST route for saving a new Schedule *** this will need to be changed
// because Schedule.create will be a single entry
app.post("/api/Schedules", (req, res) => {
  db.Schedule.create(req.body).then(dbSchedule => {
    res.json(dbSchedule);
  });
});

// PUT route for updating Schedules
app.put("/api/Schedules", (req, res) => {
  db.Schedule.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbSchedule => {
    res.json(dbSchedule);
  });
});

// module.exports = function (app) {
//   app.get("/api/Schedules", (req, res) => {
//     db.Schedule.findAll({})
//       .then(function (dbSchedule)) {
//       res.json(dbSchedule);
//     }
//   });
// };
