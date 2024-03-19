import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Header.css'

import logo from '../../assets/images/logo.svg'
import { ReactComponent as Burger } from '../../assets/icons/hamburger-menu.svg'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    document.body.style.overflowY = `${isOpen ? 'hidden' : 'visible'}`
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
            <nav className={`navigation ${isOpen ? 'active' : ''}`}>
                <ul className="header__block">
                    <div className="header__contacts">
                        <img src={logo} alt="logo" />
                    </div>

                    <li className="header__block-element">
                        <Link
                            className="underline"
                            to="about"
                            smooth={true}
                            duration={1000}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            О нас
                        </Link>
                    </li>

                    <li className="header__block-element">
                        <Link
                            className="underline"
                            to="coffee-menu"
                            smooth={true}
                            duration={1000}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Напитки
                        </Link>
                    </li>

                    <li className="header__block-element">
                        <Link
                            className="underline"
                            to="contacts"
                            smooth={true}
                            duration={1000}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
            <button
                className="header__menu-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Burger className="menu-icon" />
            </button>
        </header>
    )
}

export default Header
