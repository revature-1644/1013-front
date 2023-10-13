import React from "react";
import { Painting } from "../models/Painting";
interface propsInterface {
    painting:Painting
}

export function PaintingInfoCard(props:propsInterface){
    return (
        <>
        <h1>{props.painting.title}</h1>
        <img src = {props.painting.imageUrl}></img>
        <p>{props.painting.yearMade}</p>
        </>
    )
}