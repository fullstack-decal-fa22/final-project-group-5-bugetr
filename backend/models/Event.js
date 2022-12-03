const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    name: { type: String, required: true, },
    date: { type: Date, required: true, },
    budgetCategory: { type: String, required: true, },
    budget: { type: Number, default: 0, },
})

// export model event with EventSchema
module.exports = mongoose.model("event", EventSchema);