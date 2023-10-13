import { Painting } from "../models/Painting";

export function postPaintingAPI(painting:Painting, authorId:number){
    return fetch("http://localhost:9000/author/"+authorId+"/painting",
    {mode:"cors",
    method:"POST",
    body:JSON.stringify(painting),
    headers:{
        "access-control-allow-origin":"*",
        "access-control-allow-headers":"GET, POST, OPTIONS",
        "content-type":"application/json"
    }})
}
export function getPaintingAPI(){
    return fetch("http://localhost:9000/painting",
    {mode:"cors",
    method:"GET",
    headers:{
        "access-control-allow-origin":"*",
        "access-control-allow-headers":"GET, POST, OPTIONS",
        "content-type":"application/json"
    }})
}