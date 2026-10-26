import React from 'react'
import imgBg from "../../assets/images/bg.png"

import "./featuresSection.scss"

const GaugeIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 34a18 18 0 1 1 36 0" />
        <path d="M24 34l7-10" />
        <circle cx="24" cy="34" r="2" />
        <path d="M10 22l2 1M24 14v2M38 22l-2 1" />
    </svg>
)

const ShieldIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 5l15 5v12c0 10-6 17-15 21C15 39 9 32 9 22V10l15-5z" />
        <path d="M17 24l5 5 9-10" />
    </svg>
)

const GearIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="6" />
        <path d="M21 5h6l1 5 4 2 4-3 4 4-3 4 2 4 5 1v6l-5 1-2 4 3 4-4 4-4-3-4 2-1 5h-6l-1-5-4-2-4 3-4-4 3-4-2-4-5-1v-6l5-1 2-4-3-4 4-4 4 3 4-2 1-5z" />
    </svg>
)

const features = [
    {
        id: 1,
        icon: <GaugeIcon />,
        title: ["Higher", "performance"],
        text: "More power. Smoother drives.",
    },
    {
        id: 2,
        icon: <ShieldIcon />,
        title: ["Stronger", "protection"],
        text: "Keeps engines cleaner for longer.",
    },
    {
        id: 3,
        icon: <GearIcon />,
        title: ["Advanced", "synthetic formulation"],
        text: "Engineered for modern mobility.",
    },
]

const FeaturesSection = () => {
    return (
        <section className="features">
            <img className="features__bg" src={imgBg} alt="" />
            <div className="features__shade" />

            {/* ---------- left ---------- */}
            <div className="features__left">
                <div className="features__eyebrow">
                    <span className="features__eyebrow-line" />
                    <span>Auron technology</span>
                </div>

                <h2 className="features__title">
                    <span className="features__title-line" style={{ animationDelay: "0.35s" }}>Performance</span>
                    <span className="features__title-line" style={{ animationDelay: "0.5s" }}>Protection</span>
                    <span className="features__title-line" style={{ animationDelay: "0.65s" }}>Progress</span>
                </h2>

                <p className="features__text">
                    Advanced synthetic technology for cleaner engines, longer life
                    and a more sustainable future.
                </p>

                <a href="#" className="features__btn">
                    <span>Discover Our Technology</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h16M14 6l6 6-6 6" />
                    </svg>
                </a>
            </div>

            {/* ---------- right ---------- */}
            <div className="features__right">
                {features.map((f, i) => (
                    <div
                        key={f.id}
                        className="features__item"
                        style={{ animationDelay: `${0.6 + i * 0.2}s` }}
                    >
                        <div className="features__icon">{f.icon}</div>
                        <div className="features__info">
                            <h4>
                                {f.title.map((line) => (
                                    <span key={line}>{line}</span>
                                ))}
                            </h4>
                            <p>{f.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturesSection