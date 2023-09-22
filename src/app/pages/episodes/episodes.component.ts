import { Component } from '@angular/core';
import { IEpisode, IEpisodeFilters, IEpisodeInfo, IFilter, IPaginator } from 'src/app/shared/interface/interfaces';
import { EpisodeService } from 'src/app/shared/services/episode.service';

@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.component.html',
    styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {


    public episodes: IEpisode[] = [];
    public paginator: IPaginator = {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
    }
    public error: string = "";
    public filtersType: IEpisodeFilters[] = [
        {
            type: 'name',
            filter: 'text'
        },
        {
            type: 'episode',
            filter: 'text'
        }
    ]

    constructor(
        private episodeService: EpisodeService
    ) { }

    ngOnInit() {
        this.getEpisodes()
    }

    async getEpisodes(page?: number): Promise<void> {
        this.episodeService.getEpisodes(page ? page : undefined)
            .subscribe(
                {
                    next: (response) => {
                        this.paginator = response.info
                        this.episodes = Object.values(response.results)
                        this.error = ''
                    },
                    error: (error) => {
                        this.error = error.status
                    }
                }
            );
    }

    addFilter(type: string, value: any) {
        let filter: IFilter = {
            type: type,
            value: value != 'all' ? value : ''
        }
        this.episodeService.setFilter(filter)
        this.getEpisodes()
    }

    mapEpisodeInfos(episode: IEpisode): IEpisodeInfo {
        let episodeInfo: IEpisodeInfo = {
            name: episode.name,
            airDate: episode.air_date,
            episode: episode.episode,
            totalCharacters: episode.characters.length
        }
        return episodeInfo
    }
}
