import React from 'react'
import { Link } from 'react-scroll'
import './MainPage.css'
import arrowDown from '../../assets/icons/arrow-down.svg'

function MainPage() {
    return (
        <section className="firstblock">
            <div className="firstblock-background"></div>
            <div className="firstblock-info">
                <h1 className="firstblock-header">
                    <span className="slogan1">Этот мир не так уж плох</span>{' '}
                    <br />
                    <span className="slogan2">покуда в нем есть кофе</span>
                </h1>
                <Link to="coffee-menu" smooth={true} duration={1000}>
                    <button className="firstblock-button">Меню</button>
                </Link>
                <img className="arrow-down" src={arrowDown} alt="" />
            </div>
        </section>
    )
}

export default MainPage
