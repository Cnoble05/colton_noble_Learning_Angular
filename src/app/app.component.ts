import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { VideoGames } from './Shared/Modules/VideoGames';
import {NgClass, NgForOf, NgIf,} from '@angular/common';
import {VideoGameListComponent} from "./video-game-list/video-game-list.component";
import {VideoGameListItemComponent} from "./video-game-list-item/video-game-list-item.component";
import {VideoGamesService} from "./Services/video-games.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, VideoGameListComponent, VideoGameListItemComponent, NgClass, RouterLinkActive, RouterLink,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Colton's Games"

  selectedGame: VideoGames | undefined;
  constructor(private videoGameService: VideoGamesService) {
  }

  ngOnInit(){
    this.getSelectedGame(2);
  }

  getSelectedGame(id: number): void {
    this.videoGameService.getGameById(id).subscribe({
      next: (game) => this.selectedGame = game,
      error: err => console.error("Error fetching game by ID", err)
    });



  }
}
