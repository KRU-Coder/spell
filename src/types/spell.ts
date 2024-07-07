export interface ISpell {
    index: string
    name: string
    level: number
    url: string
}

export interface ISpellDetails {
    index: string
    name: string
    desc: string[]
    higher_level: string[]
    range: string
    components: string[]
    material: string
    ritual: boolean
    duration: string
    concentration: boolean
    casting_time: string
    level: number
    attack_type: string
    damage: {
        damage_type: {
            name: string
            url: string
        }
        damage_at_slot_level: {
            [key: number]: string
        }
    }
    school: {
        name: string
        url: string
    }
    classes: Array<{
        name: string
        url: string
    }>
    subclasses: Array<{
        name: string
        url: string
    }>
    url: string
}
