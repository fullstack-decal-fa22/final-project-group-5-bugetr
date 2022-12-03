import {useState}  from 'react';
import Event from './Event.js';
import axios from 'axios';
//take event from database, map to events component
const Events = (props) => {
    const [event, setEvent] = useState([]);

    function renderEvents(event, index) {

        return <Event title={event.title} date={event.date} key={event.index} />
    };

    // // see blockstagram
    // const posts = event.map((event, index) =>  {
    //     return renderEvents(event, index)
    // });

    axios.get(`http://localhost:4000/all`, { timeout: 10 * 1000 }).then((body) => {
        console.log("Received response from server for all events ", body.data);
        const events = body.data;
        for (const event of events) {
            const title = event.name;
            const date = event.date;
        }
    }, (err) => {
        console.log("Error: ", err);
    });

    return (
        <div>
            {event}
        </div>
    );
}

export default Events;

// import { useState } from 'react';
// import React from 'react';
// import Menu from './Menu';
// import Block from './Block';

// // Refer to Hint 2 for more help!
// // Hint: Consider the useState hook for the new variable!
// // Think of the state of the feed as a LIST of Block components,
// // where every time you add a block, the list now contains the newly added block :]

// const Feed = () => {
//     /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
//     const [blocks, setPost] = useState([]); // don't need to do typing (declaring array type)

//     // onClick > handleClick > addBlock > renderBlock
//     function addBlock(color) {
//         setPost([color, ...blocks]) // keeps track of colors
//         // setPost([color, ...blocks]) adds the post at the top of the array and page
//         // setPost([...blocks, color]) adds the post at the bottom of the array and page
//     };

//     function renderBlock(color, index) {
//         return <Block color={color} key={index} />
//     };

//     /* Use the map() function to render multiple Blocks! */
//     // TODO: edit this variable
//     const posts = blocks.map((block, index) => { // need to have an index or a key when mapping similar objects
//         // return function here because even though calling the function returns a block in renderBlock,
//         // you need to pass that same information up to posts, which will then be rendered in the return function below
//         return renderBlock(block, index) // the function called here must take in 2 parameters too
//     });

//     return (
//         <div>
//             <Menu addBlock={addBlock}></Menu>

//             {/* Below is where all of your Blocks should render! */}
//             {posts}
//         </div>
//     );
// }
