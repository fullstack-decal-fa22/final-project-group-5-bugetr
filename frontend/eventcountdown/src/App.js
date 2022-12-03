import logo from "./logo.svg";
import "./App.css";
import  {ChakraProvider}  from "@chakra-ui/react";

import NavBar from "./Components/NavBar.js";
import Events from "./Components/Events.js";
import Event from "./Components/Event.js";
import Main from "./Components/Main.js";
import Transactions from "./Components/Transactions.js";
import AddEvent from "./Components/AddEvent.js";
import AddTotalBudget from "./Components/AddTotalBudget.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
    {/* <BrowserRouter> */}
  
     <Main></Main>
    {/* </BrowserRouter> */}
    </ChakraProvider>
  );
}

export default App;
