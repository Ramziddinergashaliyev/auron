import React, { useEffect, useRef, useState } from "react"
import "./sustainability.scss"

const STATS = [
    { value: 40, suffix: "%", label: "Less waste in production" },
    { value: 100, suffix: "%", label: "Recyclable packaging goal" },
    { value: 25, suffix: "%", label: "Lower energy per liter" },
    { value: 5000, suffix: "+", label: "Liters of used oil recycled" },
]

const PILLARS = [
    {
        title: "Cleaner formulas",
        text: "Low-ash, fuel-efficient oils that help engines burn cleaner and cut harmful emissions.",
        icon: "M12 3c4 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2-6 6-10z",
    },
    {
        title: "Responsible production",
        text: "Optimized blending, closed-loop water use and energy-saving equipment at every plant stage.",
        icon: "M4 20h16M6 20V10l6-4 6 4v10M10 20v-5h4v5",
    },
    {
        title: "Smarter packaging",
        text: "Lighter, recyclable containers with less plastic and clear sorting marks for easy recycling.",
        icon: "M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8",
    },
]

const CYCLE = [
    { title: "Produce", text: "Efficient, low-waste blending." },
    { title: "Use", text: "Longer drain intervals mean less oil consumed." },
    { title: "Collect", text: "Used oil is gathered by licensed partners." },
    { title: "Recycle", text: "Re-refined into base oil or safe energy." },
]

const GOALS = [
    { label: "Recyclable packaging", value: 85 },
    { label: "Energy from efficient equipment", value: 70 },
    { label: "Used oil collection network", value: 55 },
    { label: "Waste reduction in production", value: 40 },
]

const useReveal = () => {
    const ref = useRef(null)

    useEffect(() => {
        const root = ref.current
        if (!root) return
        const items = root.querySelectorAll(".reveal")

        if (!("IntersectionObserver" in window)) {
            items.forEach((el) => el.classList.add("is-in"))
            return
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-in")
                        io.unobserve(e.target)
                    }
                })
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        )

        items.forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [])

    return ref
}

const CountUp = ({ to, suffix = "", duration = 1800 }) => {
    const ref = useRef(null)
    const [n, setN] = useState(0)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setN(to)
            return
        }

        let raf
        const run = () => {
            const start = performance.now()
            const tick = (now) => {
                const p = Math.min((now - start) / duration, 1)
                setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
                if (p < 1) raf = requestAnimationFrame(tick)
            }
            raf = requestAnimationFrame(tick)
        }

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    run()
                    io.disconnect()
                }
            },
            { threshold: 0.4 }
        )
        io.observe(el)

        return () => {
            io.disconnect()
            cancelAnimationFrame(raf)
        }
    }, [to, duration])

    return (
        <span ref={ref}>
            {to >= 1000 ? n.toLocaleString("en-US") : n}
            {suffix}
        </span>
    )
}

const Sustainability = () => {
    const page = useReveal()

    return (
        <main className="sus" ref={page} id="sustainability">
            <section className="sus__hero">
                <span className="sus__stripe sus__stripe--red" aria-hidden="true" />
                <span className="sus__stripe sus__stripe--blue" aria-hidden="true" />

                <div className="container sus__hero-inner">
                    <span className="sus__eyebrow">Sustainability</span>
                    <h1 className="sus__title">
                        <span className="sus__mask">
                            <span>PERFORMANCE THAT</span>
                        </span>
                        <span className="sus__mask">
                            <span>
                                RESPECTS THE <em>PLANET</em>
                            </span>
                        </span>
                    </h1>
                    <p className="sus__lead">
                        Better lubricants mean less friction, less fuel and fewer emissions.
                        We build that idea into our products, our plants and our packaging.
                    </p>
                </div>
            </section>

            <section className="sus__stats">
                <div className="container">
                    <ul className="sus__stats-grid">
                        {STATS.map((s, i) => (
                            <li key={s.label} className="reveal" style={{ "--i": i }}>
                                <strong>
                                    <CountUp to={s.value} suffix={s.suffix} />
                                </strong>
                                <span>{s.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="sus__section">
                <div className="container">
                    <div className="sus__head reveal">
                        <span className="sus__eyebrow">Our approach</span>
                        <h2>Three ways we reduce our footprint</h2>
                    </div>

                    <div className="sus__cards">
                        {PILLARS.map((p, i) => (
                            <article key={p.title} className="sus__card reveal" style={{ "--i": i }}>
                                <span className="sus__card-ico" aria-hidden="true">
                                    <svg viewBox="0 0 24 24">
                                        <path d={p.icon} />
                                    </svg>
                                </span>
                                <h3>{p.title}</h3>
                                <p>{p.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sus__section sus__section--soft">
                <div className="container">
                    <div className="sus__head reveal">
                        <span className="sus__eyebrow">Life cycle</span>
                        <h2>Oil that keeps moving, and keeps returning</h2>
                    </div>

                    <ol className="sus__cycle">
                        {CYCLE.map((c, i) => (
                            <li key={c.title} className="sus__cycle-item reveal" style={{ "--i": i }}>
                                <span className="sus__cycle-num">{String(i + 1).padStart(2, "0")}</span>
                                <h3>{c.title}</h3>
                                <p>{c.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="sus__section">
                <div className="container sus__goals">
                    <div className="sus__head reveal">
                        <span className="sus__eyebrow">Goals</span>
                        <h2>Where we are heading</h2>
                        <p>
                            Progress toward our long-term targets. We update these numbers
                            as our programs grow.
                        </p>
                    </div>

                    <ul className="sus__bars">
                        {GOALS.map((g, i) => (
                            <li
                                key={g.label}
                                className="sus__bar reveal"
                                style={{ "--i": i, "--p": g.value / 100 }}
                            >
                                <div className="sus__bar-top">
                                    <span>{g.label}</span>
                                    <b>{g.value}%</b>
                                </div>
                                <div className="sus__bar-track">
                                    <span className="sus__bar-fill" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="sus__cta-wrap">
                <div className="container">
                    <div className="sus__cta reveal">
                        <div>
                            <h2>Let’s build a cleaner future together</h2>
                            <p>Partner with us on recycling, collection and eco-friendly lubricants.</p>
                        </div>

                        <a href="/contact" className="sus__btn">
                            <b aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path d="M4 12h16m-6-6 6 6-6 6" />
                                </svg>
                            </b>
                            <span>Contact us</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Sustainability