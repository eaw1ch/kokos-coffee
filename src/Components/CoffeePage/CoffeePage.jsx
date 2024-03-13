import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import './CoffeePage.css'
import 'swiper/css/pagination'

import coffee from '../../data/coffee'

import CoffeeCard from './CoffeeCard'

function CoffeePage() {
    const [filter, setFilter] = useState('coffee')
    const [filteredCards, setFilteredCards] = useState([])

    const swiperRef = useRef(null)

    useEffect(() => {
        const filtered = coffee.filter((coffee) => coffee.type === filter)
        setFilteredCards(filtered)
    }, [filter])

    const handleCategoryChange = () => {
        swiperRef.current.swiper.slideTo(0) // Сбросить текущий слайд при изменении категории
        swiperRef.current.swiper.update() // Обновить карусель
    }

    const handleRadioChange = useCallback((e) => {
        setFilter(e.target.value)
        handleCategoryChange()
    }, [])

    return (
        <main className="coffeemain" id="coffee-menu">
            <h1 className="coffeemain-header">Напитки</h1>
            <div className="filter-button">
                <label className="filter-input">
                    <input
                        type="radio"
                        name="filter"
                        value="coffee"
                        checked={filter === 'coffee'}
                        onChange={handleRadioChange}
                    />
                    <span className="custom-filter-radio">Кофе</span>
                </label>
                <label className="filter-input">
                    <input
                        type="radio"
                        name="filter"
                        value="author"
                        checked={filter === 'author'}
                        onChange={handleRadioChange}
                    />
                    <span className="custom-filter-radio">Авторские</span>
                </label>
                <label className="filter-input">
                    <input
                        type="radio"
                        name="filter"
                        value="nocoffee"
                        checked={filter === 'nocoffee'}
                        onChange={handleRadioChange}
                    />
                    <span className="custom-filter-radio">Не кофе</span>
                </label>
                <label className="filter-input">
                    <input
                        type="radio"
                        name="filter"
                        value="juice"
                        checked={filter === 'juice'}
                        onChange={handleRadioChange}
                    />
                    <span className="custom-filter-radio nomargin">Соки</span>
                </label>
            </div>

            <section className="coffeeblock">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <div className="coffeeblock-items">
                        {filteredCards.map((item) => {
                            return <CoffeeCard key={item.id} item={item} />
                        })}
                    </div>

                    <Swiper
                        ref={swiperRef}
                        modules={[Pagination]}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        className="swiper"
                    >
                        {filteredCards.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <CoffeeCard item={item} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
        </main>
    )
}

export default CoffeePage
