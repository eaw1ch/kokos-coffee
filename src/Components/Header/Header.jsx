import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'
import logo from '../../assets/images/logo.svg'

function Header() {
    return (
        <nav className="navigation">
            <header className="header">
                <img className="logo" src={logo} alt="" />
                <ul className="header__block">
                    <li>
                        <Link
                            className="header__block-element underline"
                            to="about"
                            smooth={true}
                            duration={1000}
                        >
                            О нас
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="header__block-element underline"
                            to="coffee-menu"
                            smooth={true}
                            duration={1000}
                        >
                            Напитки
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="header__block-element underline"
                            to="contacts"
                            smooth={true}
                            duration={1000}
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </header>
        </nav>
    )
}

export default Header
