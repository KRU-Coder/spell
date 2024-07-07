import FavIcon from '../components/common/icons/FavIcon'
import SpellIcon from '../components/common/icons/SpellIcon'

export const menu = [
    {
        title: 'Spell',
        link: '/',
        icon: <SpellIcon height={30} width={30} color="#fff" />,
    },
    {
        title: 'Favourite',
        link: '/favourite',
        icon: <FavIcon height={30} width={30} color="#fff" />,
    },
]
