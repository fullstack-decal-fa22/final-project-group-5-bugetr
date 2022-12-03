const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

//Initiate Mongo Server
const dbURL = "mongodb://127.0.0.1:27017/calendar-app-db"
mongoose.Promise = global.Promise
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to events database.")
  })
  .catch(err => {
    console.log("Failed to connect: ", err)
    process.exit()
  })

const app = express();

//security
const cors = require('cors')
app.use(cors())
app.options('*', cors())

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//schema - this is the event model and tells what attributes the event has
const EventSchema = mongoose.Schema({
  name: { type: String, required: true, },
  date: { type: Date, required: true, },
  budgetCategory: { type: String, required: true, },
  budget: { type: Number, default: 0, },
})
const Event = mongoose.model("Event", EventSchema)

//showing that the api is working
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
})

//get all events
app.get("/all", (req, res) => {
  Event.find().then((err, data) => {
    if(err){
      res.send(err)
    } else {
      res.json(data)
    }
  })
})

//get specific event by event name
app.get("/event/:name", (req, res) => {
  const target = req.params.name

  Event.findOne({name: target})
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Couldn't find " + target })
      } else {
        res.json(data)
      }
    })
    .catch(err => {
      res.status(500).send({ message: err + " when retrieveing " + target })
    })
})

//create an event
app.post("/newEvent", function (req, res) {
  //need work with front end on this maybe - this should work as long as all fields have same name as schema
  const info = {
    name: req.body.name,
    date: new Date(req.body.date),
    budgetCategory: req.body.budgetCategory,
    budget: req.body.budget
  }
  const event = new Event(info)

  event.save()
    .then((err, result) => {
      res.send("Event saved to database")
    })
    .catch(err => {
      res.status(400).send("Error saving event to database " + err)
    })
})

//edit specific event
app.put("/edit/:name", (req, res) => {
  const target = req.params.name
  Event.findOneAndUpdate({ name: target }, { 
    $set: { 
      date: req.body.date,
      budgetCategory: req.body.budgetCategory,
      budget: req.body.budget
    }
  }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

//delete specific event
app.delete("/delete/:name", (req, res) => {
  const target = req.params.name
  Event.findOneAndDelete({ name: target }, (err, result) => {
    if(err){
      res.send(err)
    } else {
      res.send("Event " + target + " was successfully deleted.")
    }
  })
})

//Debug message
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`)
})
