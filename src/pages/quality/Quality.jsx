import React, { useEffect, useRef, useState } from "react"
import "./quality.scss"

const STATS = [
    { value: 99, suffix: "%", label: "Batches passed first test" },
    { value: 120, suffix: "+", label: "Lab checks per product" },
    { value: 15, suffix: "+", label: "Years of experience" },
    { value: 30, suffix: "+", label: "Product lines" },
]

const STANDARDS = [
    {
        title: "API",
        text: "Our engine oils are formulated to meet API service categories such as SN Plus.",
        icon: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z",
    },
    {
        title: "ACEA",
        text: "European performance sequences guide our formulas for modern engines.",
        icon: "M3 12h4l3-8 4 16 3-8h4",
    },
    {
        title: "SAE",
        text: "Viscosity grades checked for stable flow in cold starts and high heat.",
        icon: "M12 3v10a4 4 0 1 0 0 0M12 3h0M9 6h6",
    },
    {
        title: "ISO",
        text: "Production and quality management built on documented, repeatable processes.",
        icon: "M5 12l4 4 10-10",
    },
]

const STEPS = [
    { title: "Raw materials", text: "Every base oil and additive is verified before it enters production." },
    { title: "Blending", text: "Precise, computer-controlled mixing keeps every batch identical." },
    { title: "Laboratory testing", text: "Viscosity, flash point, wear and oxidation tests on each batch." },
    { title: "Packaging", text: "Sealed, labeled and traceable by batch code and QR." },
    { title: "Delivery", text: "Storage and logistics controlled until the product reaches you." },
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

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (reduce) {
            setN(to)
            return
        }

        let raf
        const run = () => {
            const start = performance.now()
            const tick = (now) => {
                const p = Math.min((now - start) / duration, 1)
                const eased = 1 - Math.pow(1 - p, 3)
                setN(Math.round(to * eased))
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
            {n}
            {suffix}
        </span>
    )
}

const Quality = () => {
    const page = useReveal()

    return (
        <main className="quality" ref={page} id="quality">
            <section className="quality__hero">
                <span className="quality__stripe quality__stripe--red" aria-hidden="true" />
                <span className="quality__stripe quality__stripe--blue" aria-hidden="true" />

                <div className="container quality__hero-inner">
                    <span className="quality__eyebrow">Quality</span>
                    <h1 className="quality__title">
                        <span className="quality__mask">
                            <span>QUALITY YOU CAN</span>
                        </span>
                        <span className="quality__mask">
                            <span>
                                FEEL IN EVERY <em>DROP</em>
                            </span>
                        </span>
                    </h1>
                    <p className="quality__lead">
                        From raw materials to the finished can, every step is measured,
                        tested and documented, so your engine gets exactly what it needs.
                    </p>
                </div>
            </section>

            <section className="quality__stats">
                <div className="container">
                    <ul className="quality__stats-grid">
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

            <section className="quality__section">
                <div className="container">
                    <div className="quality__head reveal">
                        <span className="quality__eyebrow">Standards</span>
                        <h2>Built to international specifications</h2>
                    </div>

                    <div className="quality__cards">
                        {STANDARDS.map((s, i) => (
                            <article key={s.title} className="quality__card reveal" style={{ "--i": i }}>
                                <span className="quality__card-ico" aria-hidden="true">
                                    <svg viewBox="0 0 24 24">
                                        <path d={s.icon} />
                                    </svg>
                                </span>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="quality__section quality__section--soft">
                <div className="container">
                    <div className="quality__head reveal">
                        <span className="quality__eyebrow">Control</span>
                        <h2>Five steps. Zero shortcuts.</h2>
                    </div>

                    <ol className="quality__steps">
                        {STEPS.map((s, i) => (
                            <li key={s.title} className="quality__step reveal" style={{ "--i": i }}>
                                <span className="quality__step-num">{String(i + 1).padStart(2, "0")}</span>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="quality__cta-wrap">
                <div className="container">
                    <div className="quality__cta reveal">
                        <div>
                            <h2>Have a question about our quality?</h2>
                            <p>Our technical team will gladly share test data and certificates.</p>
                        </div>

                        <a href="/contact" className="quality__btn">
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

export default Quality