export function getArray(character) {
    const special = character.special

    special.map(item => { if (!item.description) item.description = 'Описание недоступно' })

    return special
}

