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

}


