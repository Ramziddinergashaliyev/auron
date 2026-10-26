import React, { useState } from 'react';
import './Sections.scss';

export default function AuronSections() {
    const [selectedBrand, setSelectedBrand] = useState('');

    const features = [
        {
            id: '01',
            title: 'Dvigatel Maksimal Himoyasi',
            desc: 'Yuqori bosim va ishqalanish ostida ham metall yuzalarda mustahkam himoya qatlamini hosil qiladi.',
            icon: '🛡️'
        },
        {
            id: '02',
            title: 'Yoqilg\'i Tejamkorligi',
            desc: 'Sintetik molekulyar tarkib hisobiga dvigatelning yengil ishlashini taʼminlaydi va yoqilg\'i sarfini kamaytiradi.',
            icon: '⚡'
        },
        {
            id: '03',
            title: 'Ekstremal Haroratlar',
            desc: '-45°C gacha sovuqda tez ishga tushish va +220°C issiqda yopishqoqlikni saqlab qolish.',
            icon: '❄️🔥'
        },
        {
            id: '04',
            title: 'Tozalik va Cho\'kmalarsiz',
            desc: 'Yangi avlod detergentlari tufayli dvigatel ichki qismlarini toza va kirlanishdan xoli tutadi.',
            icon: '✨'
        }
    ];

    const products = [
        {
            name: 'Siena Force 5W-30',
            category: 'Fully Synthetic',
            standard: 'API SN Plus / ACEA C3',
            badge: 'Best Seller',
            img: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&auto=format&fit=crop&q=60'
        },
        {
            name: 'Apex Turbo 0W-40',
            category: 'Racing Formula',
            standard: 'API SP / BMW Longlife-04',
            badge: 'Performance',
            img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=60'
        },
        {
            name: 'MaxDuty Diesel 10W-40',
            category: 'Heavy Duty',
            standard: 'API CK-4 / MB 228.51',
            badge: 'Commercial',
            img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60'
        }
    ];

    return (
        <div className="auron-body-sections">

            {/* 1. FEATURES SECTION */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">ENG YUQORI STANDARTLAR</span>
                        <h2 className="title">Nega Dvigatelingiz Uchun <span>Auron?</span></h2>
                    </div>

                    <div className="features-grid">
                        {features.map((item) => (
                            <div key={item.id} className="feature-card">
                                <div className="card-top">
                                    <span className="badge-id">{item.id}</span>
                                    <span className="icon">{item.icon}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="card-border-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. PRODUCT SHOWCASE SECTION */}
            <section className="products-showcase">
                <div className="container">
                    <div className="section-header-row">
                        <div>
                            <span className="subtitle">MAHSULOTLAR KATALOGI</span>
                            <h2 className="title">Innovatsion Yog'lar Va <span>Suyuqliklar</span></h2>
                        </div>
                        <button className="btn-auron-outline">Barcha toifalarni ko'rish &rarr;</button>
                    </div>

                    <div className="products-grid">
                        {products.map((prod, index) => (
                            <div key={index} className="product-card">
                                <div className="badge">{prod.badge}</div>
                                <div className="img-wrapper">
                                    <img src={prod.img} alt={prod.name} />
                                </div>
                                <div className="info">
                                    <span className="cat">{prod.category}</span>
                                    <h4>{prod.name}</h4>
                                    <span className="spec">{prod.standard}</span>
                                    <div className="actions">
                                        <button className="btn-detail">Batafsil</button>
                                        <button className="btn-cart">TDS / Xususiyatlar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. INTERACTIVE OIL SELECTOR / FINDER */}
            <section className="oil-finder-section">
                <div className="container">
                    <div className="oil-finder-box">
                        <div className="finder-text">
                            <span className="subtitle">MOS MOYNI TANLASH</span>
                            <h2>Avtomobilingizga qaysi moy mos keladi?</h2>
                            <p>Avtomobilingiz rusumi va modelini tanlang, biz sizga mos yopishqoqlik va toifadagi moyni aniqlab beramiz.</p>
                        </div>

                        <form className="finder-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Transport turi</label>
                                <select>
                                    <option>Yengil avtomobil</option>
                                    <option>Yuk mashinasi / Maxsus texnika</option>
                                    <option>Mototsikl</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Brend / Marka</label>
                                <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
                                    <option value="">Tanlang (Masalan: BMW, Chevrolet, Toyota)</option>
                                    <option value="chevrolet">Chevrolet</option>
                                    <option value="toyota">Toyota</option>
                                    <option value="bmw">BMW</option>
                                    <option value="hyundai">Hyundai</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Ishlab chiqarilgan yili</label>
                                <select>
                                    <option>2020 - Hozirgacha</option>
                                    <option>2015 - 2020</option>
                                    <option>2010 - 2015</option>
                                    <option>2010 gacha</option>
                                </select>
                            </div>

                            <button type="submit" className="btn-auron-primary">
                                Qidirish <span>&rarr;</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION / PARTNERSHIP */}
            <section className="cta-section">
                <div className="cta-overlay"></div>
                <div className="container cta-content">
                    <h2>Rasmiy Diler yoki Hamkor Bo'lmoqchimisiz?</h2>
                    <p>Biz butun respublika bo'ylab avtoservislar, do'konlar va yirik parklar bilan hamkorlik qilamiz.</p>
                    <div className="cta-buttons">
                        <button className="btn-auron-primary">Hamkorlik so'rovi</button>
                        <button className="btn-auron-outline">Katalog yuklab olish (PDF)</button>
                    </div>
                </div>
            </section>

        </div>
    );
}