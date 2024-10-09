import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {VideoGameListComponent} from "./app/video-game-list/video-game-list.component";
import {VideoGameListItemComponent} from "./app/video-game-list-item/video-game-list-item.component";
import {ModifygamesComponent} from "./app/modifygames/modifygames.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/VideoGames', pathMatch: 'full'},
  {path: 'VideoGames', component: VideoGameListComponent},
  {path: 'VideoGames/:id', component: VideoGameListItemComponent},
  {path: 'modifygames', component: ModifygamesComponent},
  {path: '**', component:PageNotFoundComponent}
];



bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap Successful'))
