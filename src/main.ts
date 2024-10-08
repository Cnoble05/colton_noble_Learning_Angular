import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {VideoGameListComponent} from "./app/video-game-list/video-game-list.component";
import {VideoGameListItemComponent} from "./app/video-game-list-item/video-game-list-item.component";

const routes: Routes = [
  {path: 'VideoGames', component: VideoGameListComponent},
  {path: 'VideoGames/:id', component: VideoGameListItemComponent}
]



bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap Successful'))
