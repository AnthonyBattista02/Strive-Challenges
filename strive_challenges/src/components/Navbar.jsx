import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar () {


    return(
        <nav className='navbar'>
            <Link id='se' to = '/SE'> SE </Link>
            <Link id='ux' to = '/UX'> UX </Link>
            <Link id='ch' to = '/Challenge'> Challenge </Link>
        </nav>
    )
}