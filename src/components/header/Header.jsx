import { useState } from "react";
import logo from "../../assets/icons/logo.png";
import "./header.scss";

const links = [
    { label: "Products", href: "#products" },
    { label: "Technology", href: "/technology" },
    { label: "Quality", href: "/quality" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [lang, setLang] = useState("EN");

    return (
        <header className="header">
            <div className="header-container container">
                <a href="/" className="header__logo">
                    <img src={logo} alt="Auron" />
                </a>

                <nav className="header__nav">
                    {links.map((item) => (
                        <a key={item.label} href={item.href} className="header__link">
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="header__actions">
                    <button className="header__search" aria-label="Search">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M20 20l-4-4" />
                        </svg>
                    </button>

                    <button
                        className="header__lang"
                        onClick={() => setLang(lang === "EN" ? "UZ" : "EN")}
                    >
                        {lang}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>

                    <button className="header__burger" aria-label="Menu">
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
}