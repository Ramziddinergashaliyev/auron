import React from 'react'
import imgOne from "../../assets/images/category1.png"
import imgTwo from "../../assets/images/category2.png"
import imgThree from "../../assets/images/category3.png"

import "./categorySection.scss"

const categories = [
    {
        id: 1,
        label: "Our products",
        title: "Engine oils",
        img: imgOne,
        dark: false,
        lineColor: "#3b6df0",
    },
    {
        id: 2,
        label: "Transmission fluids",
        title: "Smooth performance",
        img: imgTwo,
        dark: true,
        lineColor: "#d8232a",
    },
    {
        id: 3,
        label: "Coolants",
        title: "Reliable protection",
        img: imgThree,
        dark: false,
        lineColor: "#3b6df0",
    },
]

const CategorySection = () => {
    return (
        <section className="category-section">
            {categories.map((item, i) => (
                <a
                    key={item.id}
                    href="#"
                    className={`category-card ${item.dark ? "category-card--dark" : ""}`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                >
                    <img className="category-card__img" src={item.img} alt={item.title} />

                    <div className="category-card__body">
                        <span className="category-card__label">{item.label}</span>
                        <span
                            className="category-card__line"
                            style={{ background: item.lineColor }}
                        />
                        <h3 className="category-card__title">{item.title}</h3>
                        <span className="category-card__arrow">→</span>
                    </div>
                </a>
            ))}
        </section>
    )
}

export default CategorySection