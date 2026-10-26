import React, { useEffect, useState } from "react"
import img from "../../assets/images/hero.png"
import "./hero.scss"

const slides = [
    {
        id: 1,
        lineTop: "PERFORMANCE",
        lineBottom: "IN ",
        accent: "MOTION",
        text: "Advanced lubricants and technical fluids for modern engines and a cleaner future.",
        image: img,
    },
    {
        id: 2,
        lineTop: "PERFORMANCE",
        lineBottom: "IN ",
        accent: "MOTION",
        text: "Advanced lubricants and technical fluids for modern engines and a cleaner future.",
        image: img,
    },
    {
        id: 3,
        lineTop: "PERFORMANCE",
        lineBottom: "IN ",
        accent: "MOTION",
        text: "Advanced lubricants and technical fluids for modern engines and a cleaner future.",
        image: img,
    },
]

const pad = (n) => String(n).padStart(2, "0")

const Hero = () => {
    const [active, setActive] = useState(0)
    const [ready, setReady] = useState(false)
    const slide = slides[active]

    useEffect(() => {
        const id = requestAnimationFrame(() =>
            requestAnimationFrame(() => setReady(true))
        )
        return () => cancelAnimationFrame(id)
    }, [])

    const next = () => setActive((p) => (p + 1) % slides.length)

    const contentKey = `${slide.lineTop}|${slide.lineBottom}|${slide.accent}|${slide.text}`

    return (
        <section className={`hero${ready ? " is-ready" : ""}`}>
            <div className="hero__media">
                {slides.map((s, i) => (
                    <img
                        key={s.id}
                        src={s.image}
                        alt={i === active ? "Auron Siena Force 5W-40 motor oil" : ""}
                        aria-hidden={i !== active}
                        className={`hero__img${i === active ? " is-active" : ""}`}
                        draggable={false}
                    />
                ))}
            </div>
            <div className="hero__overlay" />

            <div className="container hero__wrap">
                <div className="hero__inner" key={contentKey}>
                    <h1 className="hero__title">
                        <span className="hero__line">
                            <span className="hero__line-inner" style={{ "--d": "0.1s" }}>
                                {slide.lineTop}
                            </span>
                        </span>
                        <span className="hero__line">
                            <span className="hero__line-inner" style={{ "--d": "0.22s" }}>
                                {slide.lineBottom}
                                <span className="hero__accent">{slide.accent}</span>
                            </span>
                        </span>
                    </h1>

                    <span className="hero__divider" />

                    <p className="hero__text">{slide.text}</p>

                    <a href="#products" className="hero__cta">
                        <span className="hero__cta-box">
                            <svg width="28" height="14" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M0 10h38M30 2l8 8-8 8" />
                            </svg>
                        </span>
                        <span className="hero__cta-label">Explore products</span>
                    </a>
                </div>

                <div className="hero__progress">
                    {slides.map((s, i) => (
                        <button
                            key={s.id}
                            type="button"
                            className={`hero__progress-item${i === active ? " is-active" : ""}`}
                            onClick={() => setActive(i)}
                            aria-label={`Slide ${i + 1}`}
                            aria-current={i === active}
                        >
                            <span className="hero__progress-num">{pad(i + 1)}</span>
                            <span className="hero__progress-track">
                                {i === active && (
                                    <span key={active} className="hero__progress-fill" onAnimationEnd={next} />
                                )}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="hero__counter">
                    <span className="hero__counter-line" />
                    {slides.map((s, i) => (
                        <React.Fragment key={s.id}>
                            <button
                                type="button"
                                className={`hero__counter-num${i === active ? " is-active" : ""}`}
                                onClick={() => setActive(i)}
                                aria-label={`Slide ${i + 1}`}
                            >
                                {pad(i + 1)}
                            </button>
                            {i < slides.length - 1 && <span className="hero__counter-sep" />}
                        </React.Fragment>
                    ))}
                </div>

                <p className="hero__tagline">Lubricants for a moving world</p>
            </div>
        </section>
    )
}

export default Hero