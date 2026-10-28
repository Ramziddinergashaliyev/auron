// import React, { useEffect, useRef, useState } from 'react'
// import img from "../../assets/images/about.png"

// import "./about.scss"

// /* ---------- ma'lumotlar (o'zingizniki bilan almashtiring) ---------- */
// const features = [
//     "Premium base oils and advanced additive packages",
//     "Every batch tested in certified laboratories",
//     "Trusted by workshops, fleets and service centers",
// ]

// const stats = [
//     { value: 15, suffix: "+", label: "Years of experience" },
//     { value: 40, suffix: "+", label: "Countries served" },
//     { value: 120, suffix: "+", label: "Lubricant products" },
//     { value: 98, suffix: "%", label: "Customer retention" },
// ]

// /* ---------- ekranga kirganini aniqlash ---------- */
// const useInView = (threshold = 0.2) => {
//     const ref = useRef(null)
//     const [inView, setInView] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return
//         if (!("IntersectionObserver" in window)) {
//             setInView(true)
//             return
//         }
//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setInView(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [threshold])

//     return [ref, inView]
// }

// /* ---------- raqam sanash animatsiyasi ---------- */
// const Counter = ({ to, suffix = "", start, duration = 1800 }) => {
//     const [val, setVal] = useState(0)

//     useEffect(() => {
//         if (!start) return
//         const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
//         if (reduce) {
//             setVal(to)
//             return
//         }
//         let raf
//         let t0
//         const tick = (t) => {
//             if (!t0) t0 = t
//             const p = Math.min((t - t0) / duration, 1)
//             setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
//             if (p < 1) raf = requestAnimationFrame(tick)
//         }
//         raf = requestAnimationFrame(tick)
//         return () => cancelAnimationFrame(raf)
//     }, [start, to, duration])

//     return <>{val}{suffix}</>
// }

// const ArrowIcon = () => (
//     <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
//         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <path d="M5 12h14M13 6l6 6-6 6" />
//     </svg>
// )

// const About = () => {
//     const [ref, inView] = useInView()

//     return (
//         <section ref={ref} className={`about ${inView ? "about--in" : ""}`}>
//             <div className="container">
//                 <div className="about__grid">
//                     {/* ---------- rasm tomoni ---------- */}
//                     <div className="about__media">
//                         <span className="about__dots" aria-hidden="true" />
//                         <span className="about__frame" aria-hidden="true" />

//                         <div className="about__photo">
//                             <img src={img} alt="Our company" />
//                         </div>

//                         <div className="about__badge rv" style={{ "--d": "1.1s" }}>
//                             <div className="about__badge-card">
//                                 <span className="about__badge-icon">
//                                     <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
//                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//                                         strokeLinejoin="round" aria-hidden="true">
//                                         <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" />
//                                     </svg>
//                                 </span>
//                                 <div>
//                                     <strong>ISO Certified</strong>
//                                     <span>Quality you can trust</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ---------- matn tomoni ---------- */}
//                     <div className="about__content">
//                         <span className="about__eyebrow rv" style={{ "--d": "0.1s" }}>
//                             About Us
//                         </span>

//                         <h2 className="about__title rv" style={{ "--d": "0.2s" }}>
//                             Powering every engine with lubricants you can trust
//                         </h2>

//                         <p className="about__text rv" style={{ "--d": "0.3s" }}>
//                             We develop advanced lubricants for passenger cars, commercial
//                             vehicles and industrial equipment. Our formulas are built to
//                             reduce wear, keep engines cleaner and perform in real-world
//                             driving conditions.
//                         </p>

//                         <ul className="about__list">
//                             {features.map((text, i) => (
//                                 <li key={text} className="rv" style={{ "--d": `${0.4 + i * 0.12}s` }}>
//                                     <span className="about__check">
//                                         <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
//                                             stroke="currentColor" strokeWidth="3" strokeLinecap="round"
//                                             strokeLinejoin="round" aria-hidden="true">
//                                             <path d="M5 12.5l4.5 4.5L19 7.5" />
//                                         </svg>
//                                     </span>
//                                     {text}
//                                 </li>
//                             ))}
//                         </ul>

//                         <div className="about__actions rv" style={{ "--d": "0.8s" }}>
//                             <a href="#products" className="about__btn">
//                                 Explore Products <ArrowIcon />
//                             </a>
//                             <a href="#contact" className="about__link">
//                                 Contact Us
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ---------- statistika ---------- */}
//                 <div className="about__stats">
//                     {stats.map((s, i) => (
//                         <div key={s.label} className="about__stat rv" style={{ "--d": `${0.9 + i * 0.12}s` }}>
//                             <strong>
//                                 <Counter to={s.value} suffix={s.suffix} start={inView} />
//                             </strong>
//                             <span>{s.label}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default About


import React, { useEffect, useRef, useState } from 'react'
import img from "../../assets/images/about.png"

import "./about.scss"

const features = [
    "Premium base oils and advanced additive packages",
    "Every batch tested in certified laboratories",
    "Trusted by workshops, fleets and service centers",
]

const stats = [
    { value: 15, suffix: "+", label: "Years of experience" },
    { value: 40, suffix: "+", label: "Countries served" },
    { value: 120, suffix: "+", label: "Lubricant products" },
    { value: 98, suffix: "%", label: "Customer retention" },
]

const Icon = ({ children }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
    </svg>
)

const pillars = [
    {
        title: "Our Mission",
        text: "To protect engines and extend their life with reliable, high-performance lubricants that work in real driving conditions.",
        icon: (
            <Icon>
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.2" />
            </Icon>
        ),
    },
    {
        title: "Our Vision",
        text: "To become a trusted lubricant brand in every market we serve, known for consistent quality and honest partnerships.",
        icon: (
            <Icon>
                <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
            </Icon>
        ),
    },
    {
        title: "Our Values",
        text: "Quality, transparency and responsibility in every product we blend and every customer we work with.",
        icon: (
            <Icon>
                <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
                <path d="M8.5 12l2.5 2.5 4.5-5" />
            </Icon>
        ),
    },
]

const milestones = [
    { year: "2009", title: "Company founded", text: "Started with a small blending facility and a focus on engine oils." },
    { year: "2014", title: "Going international", text: "First export shipments and distributor partnerships abroad." },
    { year: "2019", title: "New laboratory", text: "Opened an in-house lab for formula development and batch testing." },
    { year: "2024", title: "120+ products", text: "Full range for passenger, commercial and industrial vehicles." },
]

const useInView = (threshold = 0.2) => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (!("IntersectionObserver" in window)) {
            setInView(true)
            return
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    io.disconnect()
                }
            },
            { threshold }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [threshold])

    return [ref, inView]
}

const Counter = ({ to, suffix = "", start, duration = 1800 }) => {
    const [val, setVal] = useState(0)

    useEffect(() => {
        if (!start) return
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (reduce) {
            setVal(to)
            return
        }
        let raf
        let t0
        const tick = (t) => {
            if (!t0) t0 = t
            const p = Math.min((t - t0) / duration, 1)
            setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
            if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [start, to, duration])

    return <>{val}{suffix}</>
}

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
)

const Stats = () => {
    const [ref, inView] = useInView(0.4)
    return (
        <div ref={ref} className={`about__stats ${inView ? "is-in" : ""}`}>
            {stats.map((s, i) => (
                <div key={s.label} className="about__stat rv" style={{ "--d": `${0.2 + i * 0.12}s` }}>
                    <strong>
                        <Counter to={s.value} suffix={s.suffix} start={inView} />
                    </strong>
                    <span>{s.label}</span>
                </div>
            ))}
        </div>
    )
}

const Pillars = () => {
    const [ref, inView] = useInView(0.25)
    return (
        <div ref={ref} className={`about__section ${inView ? "is-in" : ""}`}>
            <div className="about__head rv">
                <span className="about__eyebrow">What drives us</span>
                <h3 className="about__subtitle">Built on purpose, tested by time</h3>
            </div>

            <div className="about__pillars">
                {pillars.map((p, i) => (
                    <div key={p.title} className="rv" style={{ "--d": `${0.15 + i * 0.14}s` }}>
                        <article className="about__pillar">
                            <span className="about__pillar-icon">{p.icon}</span>
                            <h4>{p.title}</h4>
                            <p>{p.text}</p>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Journey = () => {
    const [ref, inView] = useInView(0.3)
    return (
        <div ref={ref} className={`about__section ${inView ? "is-in" : ""}`}>
            <div className="about__head rv">
                <span className="about__eyebrow">Our journey</span>
                <h3 className="about__subtitle">From a small workshop to a global supplier</h3>
            </div>

            <div className="about__journey">
                {milestones.map((m, i) => (
                    <div key={m.year} className="about__step rv" style={{ "--d": `${0.2 + i * 0.25}s` }}>
                        <strong>{m.year}</strong>
                        <h4>{m.title}</h4>
                        <p>{m.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const About = () => {
    const [ref, inView] = useInView()

    return (
        <section className="about">
            <div className="container">
                <div ref={ref} className={`about__grid ${inView ? "is-in" : ""}`}>
                    <div className="about__media">
                        <span className="about__dots" aria-hidden="true" />
                        <span className="about__frame" aria-hidden="true" />

                        <div className="about__photo">
                            <img src={img} alt="Our company" />
                        </div>

                        <div className="about__badge rv" style={{ "--d": "1.1s" }}>
                            <div className="about__badge-card">
                                <span className="about__badge-icon">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>ISO Certified</strong>
                                    <span>Quality you can trust</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about__content">
                        <span className="about__eyebrow rv" style={{ "--d": "0.1s" }}>
                            About Us
                        </span>

                        <h2 className="about__title rv" style={{ "--d": "0.2s" }}>
                            Powering every engine with lubricants you can trust
                        </h2>

                        <p className="about__text rv" style={{ "--d": "0.3s" }}>
                            We develop advanced lubricants for passenger cars, commercial
                            vehicles and industrial equipment. Our formulas are built to
                            reduce wear, keep engines cleaner and perform in real-world
                            driving conditions.
                        </p>

                        <p className="about__text rv" style={{ "--d": "0.38s" }}>
                            From raw material selection to final packaging, every step is
                            controlled in our own facility. That lets us keep quality
                            consistent, respond quickly to partners and deliver on time.
                        </p>

                        <ul className="about__list">
                            {features.map((text, i) => (
                                <li key={text} className="rv" style={{ "--d": `${0.45 + i * 0.12}s` }}>
                                    <span className="about__check">
                                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
                                            stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                                            strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12.5l4.5 4.5L19 7.5" />
                                        </svg>
                                    </span>
                                    {text}
                                </li>
                            ))}
                        </ul>

                        <div className="about__actions rv" style={{ "--d": "0.85s" }}>
                            <a href="#products" className="about__btn">
                                Explore Products <ArrowIcon />
                            </a>
                            <a href="#contact" className="about__link">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>

                <Stats />
                <Pillars />
                <Journey />

            </div>
        </section>
    )
}

export default About