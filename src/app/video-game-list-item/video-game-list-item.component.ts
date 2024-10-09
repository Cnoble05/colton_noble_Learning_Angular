import { Component, Input } from '@angular/core';
import { VideoGames } from '../Shared/Modules/VideoGames';
import {videoGameList} from "../Shared/Modules/mock-content";

@Component({
  selector: 'app-video-game-list-item',
  templateUrl: './video-game-list-item.component.html',
  standalone: true,
  styleUrls: ['./video-game-list-item.component.css']
})
export class VideoGameListItemComponent {
  @Input() VideoGame!: VideoGames;

  protected readonly videoGameList = videoGameList;
}
