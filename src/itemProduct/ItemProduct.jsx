import React from 'react'
import img from "../assets/images/item.png"
import img1 from "../assets/images/product/dex3.png"
import pdf from "../assets/pdf/Auron_Catalog_2026_EN.pdf"
import "./itemProduct.scss"

const products = [
    {
        id: 1,
        label: "Passenger Cars",
        title: ["Engine Oils"],
        text: "Maximum performance and engine protection for every drive.",
        featured: true,
    },
    {
        id: 2,
        label: "Commercial Vehicles",
        title: ["Heavy Duty", "Engine Oils"],
    },
    {
        id: 3,
        label: "Transmission",
        title: ["Transmission", "Fluids"],
    },
    {
        id: 4,
        label: "Other Products",
        title: ["Specialty", "Lubricants"],
    },
]

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
)

const DownloadIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
    </svg>
)

const ItemProduct = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__head">
                    <div className="products__intro">
                        <span className="products__eyebrow">Our Products</span>
                        <h2 className="products__title">
                            Premium Lubricants <br />
                            for a cleaner, stronger tomorrow
                        </h2>
                    </div>

                    <div className="products__side">
                        <a
                            href={pdf}
                            className="products__download"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <span className="products__downloadIcon">
                                <DownloadIcon />
                            </span>
                            <span className="products__downloadText">
                                Download Catalog
                                <small>PDF</small>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="products__grid">
                    {products.map((item) => (
                        <a
                            key={item.id}
                            href="#product"
                            className={`card ${item.featured ? "card--featured" : ""}`}
                        >
                            <div className="card__body">
                                <span className="card__label">{item.label}</span>
                                <h3 className="card__title">
                                    {item.title.map((line) => (
                                        <span key={line}>{line}</span>
                                    ))}
                                </h3>
                                {item.text && <p className="card__text">{item.text}</p>}
                                <span className="card__btn">
                                    <ArrowIcon />
                                </span>
                            </div>

                            <img className="card__img" src={img1} alt={item.title.join(" ")} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ItemProduct