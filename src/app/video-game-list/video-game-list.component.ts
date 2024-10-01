import { Component } from '@angular/core';
import { VideoGames } from '../Shared/Modules/VideoGames';
import {VideoGameListItemComponent} from "../video-game-list-item/video-game-list-item.component"; // Make sure this path is correct.

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  standalone: true,
  imports: [
    VideoGameListItemComponent
  ],
  styleUrls: ['./video-game-list.component.css']
})
export class VideoGameListComponent {
  VideoGame1: VideoGames = { price: 79.99, title: "Tekken 8", genre: "Fighting Game", yearOfRelease: 2024, Owned: false };
  VideoGame2: VideoGames = { price: 60.99, title: "Elden Ring", genre: "Souls like", yearOfRelease: 2022, Owned: false };
  VideoGame3: VideoGames = { price: 79.99, title: "Call Of Duty", genre: "First Person Shooter", yearOfRelease: 2024, Owned: false };
  VideoGame4: VideoGames = { price: 40.99, title: "Street Fighter 6", genre: "Fighting game", yearOfRelease: 2024, Owned: false };

  toggleOwned(game: VideoGames ): void {
    game.Owned = !game.Owned;
  }
}


