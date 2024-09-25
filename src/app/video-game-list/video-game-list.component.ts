import { Component, Input } from '@angular/core';
import {VideoGames} from "../Shared/Modules/VideoGames";

@Component({
  selector: 'app-video-game-list',
  standalone: true,
  imports: [],
  templateUrl: './video-game-list.component.html',
  styleUrl: './video-game-list.component.css'
})
export class VideoGameListComponent {
  @Input() VideoGame? : VideoGames

}
