import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoGames } from './Shared/Modules/user';
import {NgForOf, NgIf, } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = "Making a VideoGame!"

    VideoGame1: VideoGames = { price: 79.99, title: "Tekken 8", genre: "Fighting Game", yearOfRelease: 2024, Owned: false };
    VideoGame2: VideoGames ={ price: 60.99, title: "Elden Ring", genre: "Souls like", yearOfRelease: 2022, Owned: false };
    VideoGame3: VideoGames ={ price: 79.99, title: "Call Of Duty", genre: "First Person Shooter", yearOfRelease: 2024, Owned: false };
    VideoGame4: VideoGames ={ price: 40.99, title: "Street Fighter 6", genre: "Fighting game", yearOfRelease: 2024, Owned: false };

    VideoGameList : VideoGames[] =
      [this.VideoGame1,this.VideoGame2,this.VideoGame3,this.VideoGame4]

  toggleOwned(game: VideoGames ): void {
    game.Owned = !game.Owned;
  }

}
