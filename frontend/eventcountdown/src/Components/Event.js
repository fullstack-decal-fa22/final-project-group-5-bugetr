//import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import addEvent from "./AddEvent"

const Event = (props) => {
    return (
        <Card>
           
            <CardBody>{props.title}</CardBody>
            <p>{props.date}</p>
        </Card>
    )
}

export default Event;
