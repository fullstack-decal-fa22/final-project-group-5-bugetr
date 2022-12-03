import {React,  useState } from "react";
import axios from 'axios';
//get express
const AddEvent = () => {

const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [budget, setBudget] = useState();
const [budgetCategory, setBudgetCategory] = useState([])

  const handleSubmit = (e, req) => {
    //create express object, use post function from here
    e.preventDefault(); //no axios
    axios
      .post("/localhost:4000/newEvent", {
        name: req.body.name,
        date: new Date(req.body.date),
        budgetCategory: req.body.budgetCategory,
        burdget: req.body.budget,
      })
      .then(function (response) {
        console.log("response set");
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return (
        <div>
<form onSubmit={handleSubmit}>
    <p>Enter Event</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // when you console.log (e) you see a bunch of info in the console.log so need target.vallue 
        />
        <br></br>
        <br></br>
    <p>Date</p>
        <input 
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)} 
        />
    <p>Budget</p>
        <input 
            type="text"
            value={budget}
            onChange ={(e) => setBudget(e.target.value)}
        />
    <p>Budget Category</p>
        <select onChange={(e) => setBudgetCategory(e.target.value)}>
            <option value="Travel">Travel</option>
            <option value="Hangouts">Hangouts</option>
            <option value="Health">Health</option>
            <option value="Food">Food</option>
        </select>
        <button onClick={handleSubmit}>Submit</button> 
      </form>
      </div>
    );
  };
//handleSubmit should be a func that adds whatever is in this form to the database (access through statevars)

export default AddEvent;
