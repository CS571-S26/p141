import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <nav className="navbar">
            <span className="navbar-logo" onClick={() => navigate('/')}>Chupeng Xiong</span>
            <div className="navbar-links">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/interests">Interests</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
  )
}