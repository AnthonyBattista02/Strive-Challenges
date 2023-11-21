import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar () {


    return(
        <nav className='navbar'>
            <Link id='se' className='label' to = '/SE'> <img src='../assets/Vector.svg' alt='Home'/> </Link>
            <Link id='challenge' className='label' to = '/Challenge'> Challenge </Link>
            <h3 id='leaderboard' className='label'> Leaderboard </h3>
            <img id='accountImg' src='strive_challenges/src/assets/header=user'/>
            <h3 id='account' className='user'> Hi, David </h3>
        </nav>
    )
}