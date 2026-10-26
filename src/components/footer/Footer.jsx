import React from "react"
import "./footer.scss"

const NAV = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About us", href: "/about" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
]

const PRODUCTS = [
    { label: "Motor oils", href: "/products" },
    { label: "Transmission oils", href: "/products" },
    { label: "Technical fluids", href: "/products" },
    { label: "Antifreeze", href: "/products" },
]

const Footer = () => {
    const year = new Date().getFullYear()

    const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <a href="/" className="footer__logo" aria-label="Auron">
                            auron
                        </a>
                        <p className="footer__about">
                            Advanced lubricants and technical fluids for modern engines
                            and a cleaner future.
                        </p>
                        <span className="footer__tagline">Lubricants for a moving world</span>
                    </div>

                    <nav className="footer__col" aria-label="Footer navigation">
                        <h3 className="footer__title">Menu</h3>
                        <ul>
                            {NAV.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className="footer__col" aria-label="Products">
                        <h3 className="footer__title">Products</h3>
                        <ul>
                            {PRODUCTS.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="footer__col">
                        <h3 className="footer__title">Contact</h3>
                        <ul className="footer__contacts">
                            <li>
                                <span className="footer__ico" aria-hidden="true">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
                                        <circle cx="12" cy="9.5" r="2.5" />
                                    </svg>
                                </span>
                                <span>Mukimi Street 2, Yakkasaray District, Tashkent</span>
                            </li>
                            <li>
                                <span className="footer__ico" aria-hidden="true">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                                    </svg>
                                </span>
                                <span className="footer__phones">
                                    <a href="tel:+998712814930">+998 71 281 49 30</a>
                                    <a href="tel:+998712032031">+998 71 203 20 31</a>
                                </span>
                            </li>
                            <li>
                                <span className="footer__ico" aria-hidden="true">
                                    <svg viewBox="0 0 24 24">
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <path d="m3 7 9 6 9-6" />
                                    </svg>
                                </span>
                                <a href="mailto:info@auron.uz">info@auron.uz</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {year} Auron. All rights reserved.</p>

                    <button type="button" className="footer__up" onClick={toTop}>
                        <span>Back to top</span>
                        <b aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 20V4m-6 6 6-6 6 6" />
                            </svg>
                        </b>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer