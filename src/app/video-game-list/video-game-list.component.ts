import {Component, Input, OnInit} from '@angular/core';
import { VideoGames } from '../Shared/Modules/VideoGames';
import {VideoGameListItemComponent} from "../video-game-list-item/video-game-list-item.component";
import {VideoGamesService} from "../Services/video-games.service";
import {NgClass, NgForOf} from "@angular/common";


@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  standalone: true,
  imports: [
    VideoGameListItemComponent,
    NgForOf,
    NgClass
  ],
  styleUrls: ['./video-game-list.component.css']
})
export class VideoGameListComponent implements OnInit{

  VideoGameList: VideoGames[] = [
    {id: 1, price: 79.99, title: "Tekken 8", genre: "Fighting Game", yearOfRelease: 2024},
    {id: 2, price: 60.99, title: "Elden Ring", genre: "Souls like", yearOfRelease: 2022},
    {id: 3, price: 79.99, title: "Call Of Duty", genre: "First Person Shooter", yearOfRelease: 2024},
    {id: 4, price: 40.99, title: "Street Fighter 6", genre: "Fighting game", yearOfRelease: 2024 }
  ];


  gameList: VideoGames[] = [];


  constructor(private videoGamesService: VideoGamesService) {
  }
  ngOnInit() {
    this.videoGamesService.getVideoGames().subscribe({
      next:(data: VideoGames[]) => this.gameList = data,
      error:err => console.error("Error Facthing Games", err),
      complete:() => console.log("Student data fetch complete!")
    })
  }

}


