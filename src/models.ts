
export interface NamedApiRef {
    name: string
    url: string
}

export type SpriteSide ="front"|"back"
export type Sprites = Record<`${SpriteSide}_female`|`${SpriteSide}_shiny`|`${SpriteSide}_shiny_female`, string|null>&Record<`${SpriteSide}_default`, string>|Record<string, string|null>
export interface Pokemon {
    name: string

    abilities: {ability: NamedApiRef, is_hidden: boolean, slot: number}[]
    base_experience: number
    cries: Record<'legacy'|'latest', string>
    forms: NamedApiRef[]
    game_indices: {game_index: number, version: NamedApiRef}[]
    height: number
    held_items: {item: NamedApiRef, version_details: {version: NamedApiRef, rarity: number}[]}[]
    id:number

    is_default: boolean
    location_area_encounters: string,
    moves: {
        move: NamedApiRef,
        version_group_details: {level_learned_at: number, move_learn_method: NamedApiRef, version_group: NamedApiRef,}[]
    }[]
    order: number
    species: NamedApiRef
    sprites: Sprites
    stats: {base_stat: number, stat: NamedApiRef, effort: number}[]
    types: {type: NamedApiRef, slot: number}[]
}
