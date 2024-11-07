import { Component, OnInit } from '@angular/core';
import { VideoGames } from '../Shared/Modules/VideoGames';
import { VideoGamesService } from "../Services/video-games.service";
import {VideoGameListItemComponent} from "../video-game-list-item/video-game-list-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  standalone: true,
  imports: [
    VideoGameListItemComponent,
    NgForOf
  ],
  styleUrls: ['./video-game-list.component.css']
})
export class VideoGameListComponent implements OnInit {
  gameList: VideoGames[] = [];
  errorMessage: string = '';

  constructor(private videoGamesService: VideoGamesService) {}

  ngOnInit() {
    this.fetchGames();
  }

  fetchGames(): void {
    this.videoGamesService.getVideoGames().subscribe({
      next: (data: VideoGames[]) => this.gameList = data,
      error: (err) => this.errorMessage = `Failed to fetch games: ${err.message}`,
      complete: () => console.log("Game data fetch complete!")
    });
  }
}
