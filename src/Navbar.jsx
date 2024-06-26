import './Navbar.css'
import logo from "./assets/logo.jpg"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="" className='logo-img'/>
            </div>
            <ul className="navbar-menu">
                <li>
                    <a href="#home">Главная</a>
                </li>
                <li>
                    <a href="#about">О нас</a>
                </li>
                <li>
                    <a href="#services">Услуги</a>
                </li>
                <li>
                    <a href="#contact">Контакты</a>
                </li>
            </ul>
        </nav>

    )
}


export default Navbar