import { FilterCharactersType, FilterGenderType, FilterStatusType, FiltersType } from "./types"

export interface ICharacters {
    info: {},
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

