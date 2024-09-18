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
  Games: VideoGames[] = [
    { price: 79.99, title: "Tekken 8", genre: "Fighting Game", yearOfRelease: 2024, Owned: false },
    { price: 60.99, title: "Elden Ring", genre: "Souls like", yearOfRelease: 2022, Owned: false },
    { price: 79.99, title: "Call Of Duty", genre: "First Person Shooter", yearOfRelease: 2024, Owned: false },
    { price: 40.99, title: "Street Fighter 6", genre: "Fighting game", yearOfRelease: 2024, Owned: false },
    { price: 0, title: "Rocket League", genre: "Sports Game", yearOfRelease: 2015, Owned: false },
    { price: 0, title: "Apex Legends", genre: "Battle royal", yearOfRelease: 2019, Owned: false }
  ];

  toggleOwned(game: VideoGames ): void {
    game.Owned = !game.Owned;
  }

}
