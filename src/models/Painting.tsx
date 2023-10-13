import { Author } from "./Author";

export interface Painting {
    id:number,
    imageUrl:string,
    title:string,
    author:Author
}