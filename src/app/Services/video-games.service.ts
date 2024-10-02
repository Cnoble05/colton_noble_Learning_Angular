import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {VideoGames} from "../Shared/Modules/VideoGames";
import {VideoGameListComponent} from "../video-game-list/video-game-list.component";
import {videoGameList} from "../Shared/Modules/mock-content";


@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {

  private  videoGames: VideoGames[] = videoGameList;


  constructor() {}


  getVideoGames(): Observable<VideoGames[]>{
    return of(videoGameList);

}



}
