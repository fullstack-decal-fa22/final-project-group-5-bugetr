const eventService = require("../services/EventService");

exports.getAllEvents = async (req, res) => {
    try {
      const events = await eventService.getAllEvents();
      res.json({ data: events, status: "Successfully gotten all events" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
   
exports.createEvent = async (req, res) => {
    try {
      const event = await eventService.createEvent(req.body);
      res.json({ data: event, status: "Successfully created an event" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
   
exports.getEvetsById = async (req, res) => {
    try {
      const event = await eventService.getEventByName(req.params.id);
      res.json({ data: event, status: "Retrieved " +  req.params.name});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
   
exports.updateEvent = async (req, res) => {
    try {
      const event = await eventService.updateEvent(req.params.id, req.body);
      res.json({ data: event, status: "Updated " + req.params.name});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
   
exports.deleteEvent = async (req, res) => {
    try {
      const event = await eventService.deleteEvent(req.params.id);
      res.json({ data: event, status: "Deleted " + req.params.name});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};