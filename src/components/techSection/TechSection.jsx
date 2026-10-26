
import React, { useEffect, useRef, useState } from 'react';
import './TechSection.scss';

function useInView(ref) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (!('IntersectionObserver' in window)) {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [ref]);

    return inView;
}

export default function TechSection() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);

    return (
        <section
            ref={sectionRef}
            className={`container auron-tech ${inView ? 'in-view' : ''}`}
        >
            <div className="auron-tech__inner">

                <div className="auron-tech__top">
                    <div className="auron-tech__title">
                        <div className="auron-tech__eyebrow">
                            <span />
                            Laboratory rigor
                        </div>

                        <h2>
                            Double Synth™
                            <span>Molecular Structure</span>
                        </h2>
                    </div>

                    <div className="auron-tech__body">
                        <div className="auron-tech__body-line" />

                        <p>
                            Standard engine oils shear under mechanical
                            boundary stress. Auron’s proprietary Double
                            Synth™ technology combines fully synthetic
                            esters with Group IV PAO bases, creating a
                            stable fluid matrix designed to protect
                            engines under demanding conditions.
                        </p>
                    </div>
                </div>

                <div className="auron-tech__formula">

                    <div className="auron-tech__item">
                        <span className="item-number">01</span>
                        <div>
                            <span className="item-label">
                                Fully synthetic
                            </span>
                            <h3>Esters</h3>
                        </div>
                    </div>

                    <span className="auron-tech__sign">+</span>

                    <div className="auron-tech__item">
                        <span className="item-number">02</span>
                        <div>
                            <span className="item-label">
                                Group IV
                            </span>
                            <h3>PAO Base</h3>
                        </div>
                    </div>

                    <span className="auron-tech__sign">=</span>

                    <div className="auron-tech__item auron-tech__item--result">
                        <span className="item-number">03</span>
                        <div>
                            <span className="item-label">
                                Auron technology
                            </span>
                            <h3>Double Synth™</h3>
                        </div>
                        <span className="result-arrow">↗</span>
                    </div>

                </div>

            </div>
        </section>
    );
}
