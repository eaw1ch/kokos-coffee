import React, { useState, useEffect, useCallback } from 'react'
import './CoffeePage.css'

import coffee from '../../data/coffee'

import CoffeeCard from './CoffeeCard'

function CoffeePage() {
    const [filter, setFilter] = useState('coffee')
    const [filteredCards, setFilteredCards] = useState([])

    useEffect(() => {
        const filtered = coffee.filter((coffee) => coffee.type === filter)
        setFilteredCards(filtered)
    }, [filter])

    const handleRadioChange = useCallback((e) => {
        setFilter(e.target.value)
    }, [])

    return (
        <main className="coffeemain" id="coffee-menu">
            <h1 className="coffeemain-header">Напитки</h1>
            <div className="filter-button">
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="coffee"
                        checked={filter === 'coffee'}
                        onChange={handleRadioChange}
                    />
                    <span className="custom-filter-radio">Кофе</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="author"
                        checked={filter === 'author'}
                        onChange={handleRadioChange}
                    />
                    <span className="custom-filter-radio">Авторские</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="nocoffee"
                        checked={filter === 'nocoffee'}
                        onChange={handleRadioChange}
                    />
                    <span className="custom-filter-radio">Не кофе</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="juice"
                        checked={filter === 'juice'}
                        onChange={handleRadioChange}
                    />
                    <span className="custom-filter-radio">Соки</span>
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
                </div>
            </section>
        </main>
    )
}

export default CoffeePage
