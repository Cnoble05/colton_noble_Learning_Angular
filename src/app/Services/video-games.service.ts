import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
import {VideoGames} from "../Shared/Modules/VideoGames";
import {videoGameList} from "../Shared/Modules/mock-content";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {
  private apiUrl = 'api/video-games';


  private videoGames: VideoGames[] = videoGameList;


  constructor(private http: HttpClient) { }


  getVideoGames(): Observable<VideoGames[]> {
    return this.http.get<VideoGames[]>(this.apiUrl).pipe(catchError(this.handleError));

  }

  getGameById(VideoGameID: number): Observable<VideoGames | undefined> {
    return this.http.get<VideoGames>(`${this.apiUrl}/${VideoGameID}`).pipe(catchError(this.handleError)); //return a single student

  }

  createVideoGame(newVideoGame: VideoGames): Observable<VideoGames> {
    newVideoGame.id = this.generateNewId();
    return this.http.post<VideoGames>(this.apiUrl, newVideoGame).pipe(
        catchError(this.handleError)
    );
  }
  updateVideoGame(updateGame: VideoGames): Observable<VideoGames> {
    const url = `${this.apiUrl}/${updateGame.id}`; // Fix: Use updateGame.id
    return this.http.put<VideoGames>(url, updateGame).pipe(
        catchError(this.handleError)
    );
  }

  deleteVideoGame(videoGameId: number): Observable<VideoGames[]> {
    const url = `${this.apiUrl}/${videoGameId}`; // Fix: Use videoGameId
    return this.http.delete<VideoGames[]>(url).pipe(
        catchError(this.handleError)
    );
  }

  generateNewId(): number {
    return this.videoGames.length > 0 ? Math.max(...this.videoGames.map(videoGame => videoGame.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }


}
