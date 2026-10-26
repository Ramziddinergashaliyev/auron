import React, { useEffect, useRef, useState } from "react"
import img from "../../assets/images/technology.png"
import "./technology.scss"

const FEATURES = [
    {
        n: "01",
        title: "Double Synth base oils",
        text: "Two advanced synthetic base stocks are blended for a stable film that resists thinning in the heat and keeps flowing in the cold.",
    },
    {
        n: "02",
        title: "Smart additive package",
        text: "Detergents, dispersants and anti-wear agents work together to keep deposits suspended and metal surfaces protected.",
    },
    {
        n: "03",
        title: "Low-friction formula",
        text: "Reduced internal friction helps the engine turn more energy into motion, supporting fuel economy and cleaner exhaust.",
    },
    {
        n: "04",
        title: "Batch traceability",
        text: "Every package carries a batch code and QR, so each product can be traced back to its production and test records.",
    },
]

const STATS = [
    { value: 2, suffix: "x", label: "Synthetic base stocks" },
    { value: 120, suffix: "+", label: "Lab checks per product" },
    { value: 30, suffix: "+", label: "Product lines" },
    { value: 100, suffix: "%", label: "Batches traceable" },
]

const TESTS = [
    { method: "ASTM D445", title: "Kinematic viscosity", text: "Confirms the oil flows exactly as its grade promises." },
    { method: "ASTM D92", title: "Flash point", text: "Shows how safely the oil handles high temperatures." },
    { method: "ASTM D97", title: "Pour point", text: "The lowest temperature at which the oil still flows." },
    { method: "ASTM D5800", title: "Volatility", text: "Measures oil loss by evaporation, which affects consumption." },
    { method: "ASTM D2896", title: "Total base number", text: "Shows how well the oil neutralizes engine acids over time." },
    { method: "ASTM D892", title: "Foaming tendency", text: "Checks that the oil does not foam and lose its protective film." },
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
            {n}
            {suffix}
        </span>
    )
}

const Technology = () => {
    const page = useReveal()

    return (
        <main className="tech" ref={page} id="technology">
            <section className="tech__hero">
                <img className="tech__hero-img" src={img} alt="" draggable={false} />
                <div className="tech__hero-shade" />

                <div className="container tech__hero-inner">
                    <span className="tech__eyebrow">Technology</span>
                    <h1 className="tech__title">
                        <span className="tech__mask">
                            <span>Engineered below</span>
                        </span>
                        <span className="tech__mask">
                            <span>
                                the <em>surface</em>
                            </span>
                        </span>
                    </h1>
                </div>
            </section>

            <section className="tech__statement">
                <div className="container">
                    <p className="reveal">
                        Advanced base oils and smart additives, designed in the laboratory
                        and proven in every engine. <span>Performance you can measure.</span>
                    </p>
                </div>
            </section>

            <section className="tech__features">
                <div className="container">
                    <ul>
                        {FEATURES.map((f, i) => (
                            <li key={f.n} className="tech__feature reveal" style={{ "--i": i * 0.4 }}>
                                <span className="tech__feature-n">{f.n}</span>
                                <h2>{f.title}</h2>
                                <p>{f.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="tech__stats">
                <div className="container">
                    <ul className="tech__stats-grid">
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

            <section className="tech__lab">
                <div className="container">
                    <div className="tech__lab-head reveal">
                        <span className="tech__eyebrow">Laboratory</span>
                        <h2>What we test in every batch</h2>
                    </div>

                    <ul className="tech__lab-grid">
                        {TESTS.map((t, i) => (
                            <li key={t.title} className="reveal" style={{ "--i": i % 3 }}>
                                <small>{t.method}</small>
                                <h3>{t.title}</h3>
                                <p>{t.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Technology