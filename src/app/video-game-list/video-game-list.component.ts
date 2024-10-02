import {Component, OnInit} from '@angular/core';
import { VideoGames } from '../Shared/Modules/VideoGames';
import {VideoGameListItemComponent} from "../video-game-list-item/video-game-list-item.component";
import {VideoGamesService} from "../Services/video-games.service";


@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  standalone: true,
  imports: [
    VideoGameListItemComponent
  ],
  styleUrls: ['./video-game-list.component.css']
})
export class VideoGameListComponent implements OnInit{
  gameList: VideoGames[] = [];


  constructor(private videoGamesService: VideoGamesService) {
  }
  ngOnInit(): void {
    this.videoGamesService.getVideoGames().subscribe({
      next:(data: VideoGames[]) => this.gameList = data,
      error:err => console.error("Error Facthing Games", err),
      complete:() => console.log("Student data fetch complete!")
    })
  }

  selectedGame?: VideoGames;
  selectGame(game: VideoGames): void{
    this.selectedGame = game;
  }

}


