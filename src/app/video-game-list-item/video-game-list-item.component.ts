import { Component, Input } from '@angular/core';
import { VideoGames } from '../Shared/Modules/VideoGames';
import {videoGameList} from "../Shared/Modules/mock-content";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-video-game-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-game-list-item.component.html',
  styleUrls: ['./video-game-list-item.component.css']
})
export class VideoGameListItemComponent {
  @Input() VideoGame!: VideoGames;

  videogame: VideoGames | undefined;

  protected readonly videoGameList = videoGameList;
}
