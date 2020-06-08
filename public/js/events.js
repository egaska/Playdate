// Requiring our models as we've configured it
const db = require("../../models");

// GET route for getting all of the events
app.get("/api/events", (req, res) => {
  const query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  db.Event.findAll({
    where: query
  }).then(dbEvent => {
    res.json(dbEvent);
  });
});

// Get route for retrieving a single event
app.get("/api/events/:id", (req, res) => {
  db.Event.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbEvent => {
    console.log(dbEvent);
    res.json(dbEvent);
  });
});

// POST route for saving a new event *** this will need to be changed
// because Event.create will be a single entry
app.post("/api/events", (req, res) => {
  db.Event.create(req.body).then(dbEvent => {
    res.json(dbEvent);
  });
});

// PUT route for updating events
app.put("/api/events", (req, res) => {
  db.Event.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbEvent => {
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
