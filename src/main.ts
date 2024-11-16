import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter,Routes} from "@angular/router";
import{VideoGameListComponent} from "./app/video-game-list/video-game-list.component";


const routes: Routes = [
  {path: '', redirectTo: '/VideoGames', pathMatch: 'full'},
  {path: 'VideoGames', component: VideoGameListComponent},
  {path: 'VideoGames/:id',
  loadComponent: () =>
  import('./app/video-game-list/video-game-list.component').then(m=> m.VideoGameListComponent)},
  {path: 'modifygames',
  loadComponent: () =>
  import('./app/modifygames/modifygames.component').then(m=>m.ModifygamesComponent)},
  {path: '**',
  loadComponent: () =>
  import('./app/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)}

];


bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
}).then(r => console.log("Successful "))
