import React from 'react'
import './InfoPage.css'

import xxx from '../../assets/images/xxx.jpg'
import smile from '../../assets/icons/smile.svg'
import cup from '../../assets/icons/cup.svg'
import calendar from '../../assets/icons/calendar.svg'

function InfoPage() {
    return (
        <section className="secondblock" id="about">
            <h1 className="secondblock-header">О нас</h1>
            <div className="secondblock-container">
                <div className="secondblock-image">
                    <img className="coffee-img" src={xxx} alt="" />
                </div>
                <div className="secondblock-info">
                    <span>
                        Мы любим кофе, любим создавать и экспериментировать, и
                        рады, что теперь у каждого есть возможность разделить с
                        нами эту любовь.
                    </span>

                    <br />
                    <p>
                        <span>
                            KOKOS - это лаборатория для экспериментов, где
                            каждый может выбрать эксперимент по душе и стать
                            частичкой нашей истории.
                        </span>
                    </p>
                    <div className="info-icons">
                        <div className="statistic-block">
                            <img
                                className="statistic-icon"
                                src={smile}
                                alt=""
                            />
                            <span className="statistic-text">
                                200+ положительных отзывов
                            </span>
                        </div>
                        <div className="statistic-block">
                            <img className="statistic-icon" src={cup} alt="" />
                            <span className="statistic-text">
                                10 000 чашек приготовленного кофе
                            </span>
                        </div>
                        <div className="statistic-block">
                            <img
                                className="statistic-icon"
                                src={calendar}
                                alt=""
                            />
                            <span className="statistic-text">
                                1 год на рынке
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoPage
