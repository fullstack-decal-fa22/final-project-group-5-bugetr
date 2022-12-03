const EventModel = require("../models/Event");
 
exports.getAllEvents = async () => {
  return await EventModel.find();
};
 
exports.createEvent = async (event) => {
  return await EventModel.create(event);
};
exports.getEventById = async (id) => {
  return await EventModel.findByName(id);
};
 
exports.updateEvent = async (id, event) => {
  return await EventModel.findByNameAndUpdate(id, event);
};
 
exports.deleteEvent = async (id) => {
  return await EventModel.findByNameAndDelete(id);
};