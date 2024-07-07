const baseURI = 'https://www.dnd5eapi.co/api'
export const fetchSpells = async () => {
    const response = await fetch(`${baseURI}/spells`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
}

export const fetchSpellsDetails = async (index: string | null) => {
    const response = await fetch(`${baseURI}/spells/${index}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
}
