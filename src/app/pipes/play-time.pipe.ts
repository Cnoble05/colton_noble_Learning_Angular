import { Pipe, PipeTransform } from '@angular/core';
import {VideoGames} from "../Shared/Modules/VideoGames";
import {videoGameList} from "../Shared/Modules/mock-content";

@Pipe({
  name: 'playTime',
  standalone: true
})
export class PlayTimePipe implements PipeTransform {

  transform(minutes: number): string {
    if (minutes <= 0) {
      return 'No playtime';
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  }
}


