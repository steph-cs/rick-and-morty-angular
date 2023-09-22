import { FilterCharactersType, FilterGenderType, FilterStatusType, FiltersType } from "./types"

export interface ICharacters {
    info: IPaginator,
    results: ICharacter,
}

export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

export interface ICharacterInfo {
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    firstEpisode: string,
    lastEpisode: string
}

export interface IFilter {
    type: string,
    value: string | string[]
}

export interface ICharacterFilters {
    type: FilterCharactersType,
    filter: FiltersType,
    options: FilterGenderType[] | FilterStatusType[]
}

export interface IPaginator {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export interface ILocations {
    info: IPaginator,
    results: ILocation,
}

export interface ILocation {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    url: string,
    created: string
}

export interface ILocationInfo {
    id: number,
    name: string,
    type: string,
    dimension: string,
    firstResident: string,
    lastResident: string
}