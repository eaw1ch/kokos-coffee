import React, { forwardRef } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import './ContactsPage.css'
import instagram from '../../assets/socials/instagram.svg'
import vk from '../../assets/socials/vk.svg'
import telegram from '../../assets/socials/telegram.svg'

function ContactsPage() {
    return (
        <section className="contactsblock" id="contacts">
            <div className="container">
                <div className="contactsblock-info">
                    <h1 className="contactsblock-header">Мы ждем Вас!</h1>
                    <div className="hours-work">
                        <span className="preheader">Часы открытия:</span>
                        <span>Пн-Вс: 09:00-21:00</span>
                    </div>
                    <div className="address">
                        <span className="preheader">Адрес:</span>
                        <span>Мира ул., 57, Кинель</span>
                    </div>
                    <div className="socials">
                        <a href="https://vk.com/club218949563">
                            <img className="socials-icon" src={vk} alt="vk" />
                        </a>
                        <a href="https://web.telegram.org/">
                            <img
                                className="socials-icon"
                                src={telegram}
                                alt="telegram"
                            />
                        </a>
                        <a href="https://www.instagram.com/cocos.coffee?igsh=MzRlODBiNWFlZA==">
                            <img
                                className="socials-icon"
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                    </div>
                </div>
                <div className="map">
                    <YMaps>
                        <Map
                            defaultState={{
                                center: [53.21737, 50.632674],
                                zoom: 16,
                            }}
                            width="100%"
                        >
                            <Placemark geometry={[53.21737, 50.632674]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </section>
    )
}

export default forwardRef(ContactsPage)
