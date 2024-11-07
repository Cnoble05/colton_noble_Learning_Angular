import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {VideoGames} from "../Shared/Modules/VideoGames";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

 createDb():{videoGames: VideoGames[]} {
   const videoGames: VideoGames[] = [
     {id: 1, price: 79.99, title: "Tekken 8", genre: "Fighting Game", yearOfRelease: 2024, image: "https://static.bandainamcoent.eu/high/tekken/tekken-8/00-page-setup/TEKKEN8_Header_mobile_2.jpg"},
     {id: 2, price: 60.99, title: "Elden Ring", genre: "Souls like", yearOfRelease: 2022,image: "https://store-images.s-microsoft.com/image/apps.30323.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.08703491-f5dc-4b00-bca6-486b7b293c17?q=90&w=480&h=270"},
     {id: 3, price: 79.99, title: "Call Of Duty", genre: "First Person Shooter", yearOfRelease: 2024, image: "https://assets.xboxservices.com/assets/c6/48/c648ccdb-2c6c-4b25-869f-3c109e15015b.jpg?n=000123445_GLP-Page-Hero-0_1083x1222_02.jpg"},
     {id: 4, price: 40.99, title: "Street Fighter 6", genre: "Fighting game", yearOfRelease: 2024, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHcxOQEevOWVTxAJ8vaoxd4h4BxO2S7sCijd0Ad6TWpL-YUezXHWfvvVcRrFfy-UjcnTnxRQ"}
   ];

   return {videoGames}
 }



}
