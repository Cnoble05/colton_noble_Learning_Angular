import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {VideoGamesService} from "../Services/video-games.service";
import {videoGameList} from "../Shared/Modules/mock-content";
import {VideoGames} from "../Shared/Modules/VideoGames";
import {NgForOf} from "@angular/common";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";


@Component({
  selector: 'app-modifygames',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    HoverHighlightDirective,

  ],
  templateUrl: './modifygames.component.html',
  styleUrl: './modifygames.component.css'
})
export class ModifygamesComponent implements OnInit{
  modifyForm: FormGroup;
  videoGame: VideoGames | undefined;


  constructor(private fb: FormBuilder,
              private videoGamesService: VideoGamesService,
              private route: ActivatedRoute,
              private router: Router) {


    this.modifyForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      title: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]*$")]],
      price: ['', [Validators.required, Validators.min(0)]],
      genre: ['', Validators.required],
      yearOfRelease: ['', [Validators.required, Validators.pattern("^[0-9]{4}$")]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.videoGamesService.getGameById(+id).subscribe(videoGame => {
        if(videoGame){
          this.videoGame = videoGame;

          this.modifyForm.patchValue(videoGame)
        }
      });
    }
  }


  onSubmit(): void{
    const videoGame: VideoGames = this.modifyForm.value;

    if(videoGame.id){
      this.videoGamesService.updateVideoGame(videoGame);
    }else{
      const newId = this.videoGamesService.generateNewId();
      videoGame.id = newId;
      this.videoGamesService.createVideoGame(videoGame)
    }

    this.router.navigate(['/VideoGames']);
  }

  onDelete(): void {
    const id = this.modifyForm.get('id')?.value;

    if (id) {
      this.videoGamesService.deleteVideoGame(id).subscribe(() => {
        this.router.navigate(['/VideoGames'])
      });
    }
  }

  onCreate(): void {
    const id = this.modifyForm.get('id')?.value;
    if (!id){
      this.videoGamesService.createVideoGame(id);
      this.router.navigate(['/VideoGames']);
    }
  }


  navigateToGameList(): void {
    this.router.navigate(['/VideoGames'])
  }

}
