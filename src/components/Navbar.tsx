import React from "react";
import { Link } from "react-router-dom";
export function Navbar(){
    return (
        <>
        <Link to="list">all paintings</Link>
        <Link to = "submit">submit a new painting</Link>
        </>
    )
}