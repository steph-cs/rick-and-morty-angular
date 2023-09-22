import { Component, OnInit } from '@angular/core';
import { IFilter, ILocation, ILocationFilters, ILocationInfo, IPaginator } from 'src/app/shared/interface/interfaces';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css']
})
export class LocationsComponent {

    public locations: ILocation[] = [];
    public paginator: IPaginator = {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
    }
    public error: string = "";
    public filtersType: ILocationFilters[] = [
        {
            type: 'name',
            filter: 'text'
        },
        {
            type: 'type',
            filter: 'text'
        },
        {
            type: 'dimension',
            filter: 'text'
        },
    ]

    constructor(
        private locationService: LocationService
    ) { }

    ngOnInit() {
        this.getLocations()
    }

    async getLocations(page?: number): Promise<void> {
        this.locationService.getLocations(page ? page : undefined)
            .subscribe(
                {
                    next: (response) => {
                        this.paginator = response.info
                        this.locations = Object.values(response.results)
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
        this.locationService.setFilter(filter)
        this.getLocations(undefined)
    }

    mapLocationInfos(location: ILocation): ILocationInfo {
        let locationInfo: ILocationInfo = {
            id: location.id,
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            firstResident: location.residents[0],
            lastResident: location.residents[location.residents.length - 1]
        }
        return locationInfo
    }
}
