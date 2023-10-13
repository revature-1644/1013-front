import { Author } from "./Author";

export interface Painting {
    paintingId?:number,
    imageUrl:string,
    title:string,
    yearMade:number,
    author?:Author
}