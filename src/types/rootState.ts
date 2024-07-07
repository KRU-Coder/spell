import { ISpell } from './spell'

export interface IRoot {
    spells: {
        items: ISpell[]
        currentPage: number
        itemsPerPage: number
        activeIndex: string | null
        favs: string[]
    }
}
