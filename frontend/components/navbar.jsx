import { NavLink } from 'react-router'

const navbar = () => {
    return (
        <div>
            <div>navbar</div>
            <NavLink to={'/Length'}>Length</NavLink>
            <NavLink to={'/Weight'}>Weight</NavLink>
            <NavLink to={'/Temperature'}>Temperature</NavLink>
        </div>
    )
}

export default navbar