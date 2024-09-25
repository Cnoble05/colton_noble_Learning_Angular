import { Component } from '@angular/core';
import { VideoGames } from '../Shared/Modules/VideoGames';
import {VideoGameListItemComponent} from "../video-game-list-item/video-game-list-item.component";
import {NgClass, NgForOf} from "@angular/common"; // Make sure this path is correct.

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  standalone: true,
  imports: [
    VideoGameListItemComponent,
    NgClass,
    NgForOf
  ],
  styleUrls: ['./video-game-list.component.css']
})
export class VideoGameListComponent {
  VideoGameList: VideoGames[] = [
    { price: 79.99, title: "Tekken 8", genre: "Fighting Game", yearOfRelease: 2024, Owned: false },
    { price: 60.99, title: "Elden Ring", genre: "Souls like", yearOfRelease: 2022, Owned: false },
    { price: 79.99, title: "Call Of Duty", genre: "First Person Shooter", yearOfRelease: 2024, Owned: false },
    { price: 40.99, title: "Street Fighter 6", genre: "Fighting game", yearOfRelease: 2024, Owned: false }
  ];

}

