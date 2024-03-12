import React, { useState } from 'react'
import './CoffeeCard.css'

function CoffeeCard({ item }) {
    const [selectedSize, setSelectedSize] = useState(item.info[0])

    const handleSizeChange = (size) => {
        setSelectedSize(size)
    }

    return (
        <div key={item.id} className="coffeecard">
            <img
                className="coffeecard-photo"
                src={item.photo}
                alt={item.name}
            />
            <div className="coffeecard-info">
                <div className="coffeecard-item">{item.name}</div>
                {item.info.map((obj) => {
                    return (
                        <label key={obj.key}>
                            <input
                                type="radio"
                                value={obj.size}
                                name={item.id}
                                checked={selectedSize.key === obj.key}
                                onChange={() => {
                                    handleSizeChange(obj)
                                }}
                            />
                            <span className="custom-radio">{obj.size}мл</span>
                        </label>
                    )
                })}
                <p className="item-price">{selectedSize.price}₽</p>
            </div>
        </div>
    )
}

export default CoffeeCard
