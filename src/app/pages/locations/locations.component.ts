import { Component, OnInit } from '@angular/core';
import { ILocation, ILocationInfo } from 'src/app/shared/interface/interfaces';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css']
})
export class LocationsComponent {

    public locations: ILocation[] = [];
    public error: string = "";

    constructor(
        private locationService: LocationService
    ) { }

    ngOnInit() {
        this.getLocations()
    }

    async getLocations(): Promise<void> {
        this.locationService.getLocations()
            .subscribe(
                {
                    next: (response) => {
                        this.locations = Object.values(response.results)
                        this.error = ''
                    },
                    error: (error) => {
                        this.error = error.status
                    }
                }
            );
    }

    mapLocationInfos(location: ILocation): ILocationInfo {
        let locationInfo: ILocationInfo = {
            id: location.id,
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            firstResident: location.residents[0],
            lastResident: location.residents[location.residents.length -1]
        }
        return locationInfo
    }
}
