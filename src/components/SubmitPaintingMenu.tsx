import React, { SyntheticEvent, useState } from "react";
import { Painting } from "../models/Painting";
import { postPaintingAPI } from "../services/PaintingService";

export function SubmitPaintingMenu(){
    const [titleInput, setTitleInput] = useState("");
    const [yearInput, setYearInput] = useState(0);
    const [imageInput, setImageInput] = useState("");

    function updateTitleInput(event:SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setTitleInput(box.value);
    }
    function updateYearInput(event:SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setYearInput(parseInt(box.value));
    }
    function updateImageInput(event:SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setImageInput(box.value);
    }

    function attemptImageSave(){
        let painting : Painting = {
            title:titleInput,
            yearMade:yearInput,
            imageUrl:imageInput
        }
        postPaintingAPI(painting, 1)
    }

    return (
        <>
            <input value = {titleInput} onChange={updateTitleInput}></input>
            <input value = {yearInput} onChange={updateYearInput}></input>
            <input value = {imageInput} onChange={updateImageInput}></input>
            <button onClick = {attemptImageSave}></button>
        </>
    );
}