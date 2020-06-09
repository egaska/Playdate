// Requiring our models as we've configured it
const db = require("../models");
module.exports = function(app) {
// GET route for getting all of the events
app.get("/api/events", function (req, res) {
  var query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  db.Schedule.findAll({
    where: query
  }).then(function (dbEvent) {
    res.json(dbEvent);
  });
});

// Get route for retrieving a single event
app.get("/api/events/:id", function (req, res) {
  db.Schedule.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbEvent) {
    console.log(dbEvent);
    res.json(dbEvent);
  });
});

// POST route for saving a new event *** this will need to be changed
// because Event.create will be a single entry
app.post("/api/events", function (req, res) {
  console.log(req.user);
  db.Schedule.create({
    UserId: req.user.id,
    nine_am : req.body.Availablity[0],
    ten_am : req.body.Availablity[1],
    eleven_am : req.body.Availablity[2],
    twelve_pm : req.body.Availablity[3],
    one_pm : req.body.Availablity[4],
    two_pm : req.body.Availablity[5],
    three_pm : req.body.Availablity[6],
    four_pm : req.body.Availablity[7],
    five_pm : req.body.Availablity[8],
    six_pm : req.body.Availablity[9],
    seven_pm : req.body.Availablity[10],
    eight_pm : req.body.Availablity[11],
    nine_pm : req.body.Availablity[12],
  }).then(function (dbEvent) {
    res.send(dbEvent);
    
  });
});

// PUT route for updating events
app.put("/api/events", function (req, res) {
  db.Schedule.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
});

// module.exports = function (app) {
//   app.get("/api/events", (req, res) => {
//     db.Event.findAll({})
//       .then(function (dbEvent)) {
//       res.json(dbEvent);
//     }
//   });
// };
}