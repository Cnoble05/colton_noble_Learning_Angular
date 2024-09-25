import { Component, Input } from '@angular/core';
import { VideoGames } from '../Shared/Modules/VideoGames';

@Component({
  selector: 'app-video-game-list-item',
  templateUrl: './video-game-list-item.component.html',
  standalone: true,
  styleUrls: ['./video-game-list-item.component.css']
})
export class VideoGameListItemComponent {
  @Input() VideoGame!: VideoGames;

}
