import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter,Routes} from "@angular/router";
import{VideoGameListComponent} from "./app/video-game-list/video-game-list.component";
import {provideHttpClient} from "@angular/common/http";
import {VideoGameListItemComponent} from "./app/video-game-list-item/video-game-list-item.component";
import {ModifygamesComponent} from "./app/modifygames/modifygames.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";


const routes: Routes = [
  {path: '', redirectTo: '/VideoGame', pathMatch: 'full'},
  {path: 'VideoGame', component: VideoGameListComponent},
  {path: 'videoGame/:id',
    loadComponent: () =>
      import('./app/video-game-list-item/video-game-list-item.component').then(m => m.VideoGameListItemComponent)}, // Lazy Loaded
  {path: 'modifygames',
    loadComponent: () =>
      import('./app/modifygames/modifygames.component').then(m => m.ModifygamesComponent)},
  {path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap Successful'))

