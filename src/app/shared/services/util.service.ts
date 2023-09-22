import { Injectable } from '@angular/core';
import { IFilter } from '../interface/interfaces';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    static buildFilter(filters: IFilter[]): string {
        let filterUrl: string = ''
        filters.forEach(f => {
            filterUrl = filterUrl.concat(f.type + '=' + f.value)
            if (f != filters[filters.length - 1]) {
                filterUrl = filterUrl.concat('&')
            }
        });
        return filterUrl
    }

    static setFilter(filter: IFilter, filters: IFilter[]): IFilter[] {
        if ((Array.isArray(filter.value) && !(filter.value as string[]).length) || filter.value === '') {
            filters = this.removeFilter(filter, filters);
        } else {
            filters = this.addFilter(filter, filters);
        }
        return filters
    }

    static removeFilter(filter: IFilter, filters: IFilter[]): IFilter[] {
        filters = filters.filter(e => e.type !== filter.type);
        return filters
    }

    static addFilter(filter: IFilter, filters: IFilter[]): IFilter[] {
        const index = filters.findIndex(e => {
            return e.type === filter.type;
        });
        if (index === -1) {
            filters.push(filter);
        } else {
            filters[index] = filter;
        }
        return filters
    }
}
