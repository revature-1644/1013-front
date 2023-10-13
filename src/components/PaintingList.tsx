import React, { useEffect, useState } from "react";
import { Painting } from "../models/Painting";
import { PaintingInfoCard } from "./PaintingInfoCard";
import { getPaintingAPI } from "../services/PaintingService";
export function PaintingList(){
    const [allPaintings, setAllPaintings] = useState<Painting[]>([])
    useEffect(()=>{
        getPaintingAPI().then(response => {return response.json()})
        .then(json => {setAllPaintings(json)});
    }, []);
    return (
        <>
            {allPaintings.map(painting => <PaintingInfoCard painting = {painting}></PaintingInfoCard>)}
        </>
    )
}