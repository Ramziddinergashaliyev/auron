import React, { useEffect, useRef, useState } from "react"
import engineImg from "../../assets/images/hero.png"
import "./category.scss"

const categories = [
    {
        id: "engine",
        eyebrow: "Our products",
        title: "Engine oils",
        href: "#engine-oils",
        image: engineImg,
        theme: "light",
        accent: "blue",
    },
    {
        id: "transmission",
        eyebrow: "Transmission fluids",
        title: "Smooth\nperformance",
        href: "#transmission-fluids",
        image: engineImg,
        theme: "dark",
        accent: "red",
    },
    {
        id: "coolants",
        eyebrow: "Coolants",
        title: "Reliable\nprotection",
        href: "#coolants",
        image: engineImg,
        theme: "light",
        accent: "blue",
    },
]

const Category = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (!("IntersectionObserver" in window)) {
            setVisible(true)
            return
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    io.disconnect()
                }
            },
            { threshold: 0.25 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])

    return (
        <section
            ref={ref}
            className={`categories${visible ? " is-visible" : ""}`}
            aria-label="Product categories"
        >
            {categories.map((c, i) => (
                <a
                    key={c.id}
                    href={c.href}
                    className={`category category--${c.theme} category--${c.accent}`}
                    style={{ "--i": i }}
                >
                    <div className="category__media" aria-hidden="true">
                        <img src={c.image} alt="" loading="lazy" />
                    </div>

                    <div className="category__body">
                        <span className="category__eyebrow">{c.eyebrow}</span>
                        <span className="category__line" />
                        <h3 className="category__title">{c.title}</h3>
                        <span className="category__arrow" aria-hidden="true">
                            <svg width="40" height="14" viewBox="0 0 40 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                                <path d="M0 7h38M32 1l6 6-6 6" />
                            </svg>
                        </span>
                    </div>
                </a>
            ))}
        </section>
    )
}

export default Category