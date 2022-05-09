import '../App.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return <>

        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/news'>News</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>


            </ul>
        </nav>

    </>
}

export default NavBar;