import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {VideoGames} from "../Shared/Modules/VideoGames";
import {videoGameList} from "../Shared/Modules/mock-content";


@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {

  private videoGames: VideoGames[] = videoGameList;


  constructor() {
  }


  getVideoGames(): Observable<VideoGames[]> {
    return of(videoGameList);

  }

  getGameById(VideoGameID: number): Observable<VideoGames | undefined> {
    const VideoGame = this.videoGames.find(videoGame => videoGame.id == VideoGameID)
    return of(VideoGame)
  }

  createVideoGame(newVideoGame: VideoGames): Observable<VideoGames[]> {
    this.videoGames.push(newVideoGame)
    return of(this.videoGames);
  }

  updateVideoGame(updateGame: VideoGames): Observable<VideoGames[]> {
    const index = this.videoGames.findIndex(videoGame => videoGame.id == updateGame.id);
    if (index !== -1) {
      this.videoGames[index] = updateGame;
    }
    return of(this.videoGames)
  }

  deleteVideoGame(VideoGameID: number): Observable<VideoGames[]> {
    this.videoGames = this.videoGames.filter(videoGame => videoGame.id !== VideoGameID)
    return of(this.videoGames)
  }




}
