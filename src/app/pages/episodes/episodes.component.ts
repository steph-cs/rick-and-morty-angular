import { Component } from '@angular/core';
import { IEpisode, IEpisodeInfo } from 'src/app/shared/interface/interfaces';
import { EpisodeService } from 'src/app/shared/services/episode.service';

@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.component.html',
    styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {


    public episodes: IEpisode[] = [];
    public error: string = "";

    constructor(
        private episodeService: EpisodeService
    ) { }

    ngOnInit() {
        this.getEpisodes()
    }

    async getEpisodes(): Promise<void> {
        this.episodeService.getEpisodes()
            .subscribe(
                {
                    next: (response) => {
                        this.episodes = Object.values(response.results)
                        this.error = ''
                    },
                    error: (error) => {
                        this.error = error.status
                    }
                }
            );
    }

    mapEpisodeInfos(episode: IEpisode): IEpisodeInfo {
        let episodeInfo: IEpisodeInfo = {
            id: episode.id,
            name: episode.name,
            airDate: episode.air_date,
            episode: episode.episode,
            totalCharacters: episode.characters.length
        }
        return episodeInfo
    }
}
