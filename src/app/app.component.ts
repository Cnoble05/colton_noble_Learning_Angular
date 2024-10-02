import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoGames } from './Shared/Modules/VideoGames';
import {NgForOf, NgIf, } from '@angular/common';
import {VideoGameListComponent} from "./video-game-list/video-game-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, VideoGameListComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = "Making a VideoGame!"

    VideoGame1: VideoGames = {id: 1, price: 79.99, title: "Tekken 8", genre: "Fighting Game", yearOfRelease: 2024};
    VideoGame2: VideoGames ={id: 2, price: 60.99, title: "Elden Ring", genre: "Souls like", yearOfRelease: 2022};
    VideoGame3: VideoGames ={id: 3 ,price: 79.99, title: "Call Of Duty", genre: "First Person Shooter", yearOfRelease: 2024};
    VideoGame4: VideoGames ={id: 4, price: 40.99, title: "Street Fighter 6", genre: "Fighting game", yearOfRelease: 2024};

    VideoGameList : VideoGames[] =
      [this.VideoGame1,this.VideoGame2,this.VideoGame3,this.VideoGame4]


}
