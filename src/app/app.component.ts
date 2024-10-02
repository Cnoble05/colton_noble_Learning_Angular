import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoGames } from './Shared/Modules/VideoGames';
import {NgForOf, NgIf, } from '@angular/common';
import {VideoGameListComponent} from "./video-game-list/video-game-list.component";
import {VideoGameListItemComponent} from "./video-game-list-item/video-game-list-item.component";
import {VideoGamesService} from "./Services/video-games.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, VideoGameListComponent, VideoGameListItemComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


 constructor(private videoGameService: VideoGamesService) {
 }
}
