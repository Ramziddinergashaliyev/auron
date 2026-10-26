import React, { useState } from 'react'
import './contact.scss'

const TOPICS = [
    'Product question',
    'Become a distributor',
    'Technical support',
    'Other',
]

const INITIAL = { name: '', phone: '', topic: TOPICS[0], message: '' }

const Contact = () => {
    const [form, setForm] = useState(INITIAL)
    const [errors, setErrors] = useState({})
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
        if (sent) setSent(false)
    }

    const validate = () => {
        const next = {}
        if (!form.name.trim()) next.name = 'Enter your name'
        if (form.phone.replace(/\D/g, '').length < 9) next.phone = 'Enter a valid phone number'
        if (!form.message.trim()) next.message = 'Write a short message'
        return next
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const next = validate()
        setErrors(next)
        if (Object.keys(next).length) return
        setSent(true)
        setForm(INITIAL)
    }

    return (
        <section className="contact">
            <div className="container contact__inner">
                <div className="contact__intro">
                    <span className="contact__eyebrow">Contact</span>

                    <h1 className="contact__title">
                        Let’s talk <em>shop.</em>
                    </h1>
                    <p className="contact__lead">
                        Questions about lubricants, technical fluids or distribution?
                        Our team replies within one working day.
                    </p>

                    <ul className="contact__list">
                        <li>
                            <span className="contact__icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
                                    <circle cx="12" cy="9.5" r="2.5" />
                                </svg>
                            </span>
                            <div>
                                <span className="contact__label">Address</span>
                                <p>Mukimi Street 2, Yakkasaray District, Tashkent</p>
                            </div>
                        </li>

                        <li>
                            <span className="contact__icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                                </svg>
                            </span>
                            <div>
                                <span className="contact__label">Phone</span>
                                <p>
                                    <a href="tel:+998712814930">+998 71 281 49 30</a>
                                    <a href="tel:+998712032031">+998 71 203 20 31</a>
                                </p>
                            </div>
                        </li>

                        {/* contact */}

                        <li>
                            <span className="contact__icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <path d="m3 7 9 6 9-6" />
                                </svg>
                            </span>
                            <div>
                                <span className="contact__label">Email</span>
                                <p>
                                    <a href="mailto:info@auron.uz">info@auronlub.com</a>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="contact__card">
                    <h2>Send us a message</h2>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="contact__two">
                            <div className={`field ${errors.name ? 'is-error' : ''}`}>
                                <input
                                    id="c-name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder=" "
                                    autoComplete="name"
                                />
                                <label htmlFor="c-name">Full name</label>
                                {errors.name && <small>{errors.name}</small>}
                            </div>

                            <div className={`field ${errors.phone ? 'is-error' : ''}`}>
                                <input
                                    id="c-phone"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder=" "
                                    autoComplete="tel"
                                />
                                <label htmlFor="c-phone">Phone number</label>
                                {errors.phone && <small>{errors.phone}</small>}
                            </div>
                        </div>

                        <div className="field field--select">
                            <select
                                id="c-topic"
                                name="topic"
                                value={form.topic}
                                onChange={handleChange}
                            >
                                {TOPICS.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="c-topic">Topic</label>
                        </div>

                        <div className={`field ${errors.message ? 'is-error' : ''}`}>
                            <textarea
                                id="c-message"
                                name="message"
                                rows="4"
                                value={form.message}
                                onChange={handleChange}
                                placeholder=" "
                            />
                            <label htmlFor="c-message">How can we help?</label>
                            {errors.message && <small>{errors.message}</small>}
                        </div>

                        <button type="submit" className="contact__send">
                            <b aria-hidden="true">
                                <svg viewBox="0 0 24 24">
                                    <path d="M4 12h16m-6-6 6 6-6 6" />
                                </svg>
                            </b>
                            <span>SEND MESSAGE</span>
                        </button>

                        {sent && (
                            <p className="contact__ok" role="status">
                                Message sent. We’ll get back to you within one working day.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact