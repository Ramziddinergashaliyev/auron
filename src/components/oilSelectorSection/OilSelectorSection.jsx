import React, { useState } from 'react';
import './OilSelectorSection.scss';

export default function OilSelectorSection() {
    const [vehicleType, setVehicleType] = useState('car');
    const [make, setMake] = useState('');
    const [year, setYear] = useState('');

    return (
        <section className="auron-white-selector">
            <div className="section-container container">
                <div className="selector-panel">
                    <div className="panel-text">
                        <span className="badge-pill">Auron Lubricant Finder</span>
                        <h2>Get The Exact Match <span>For Your Engine</span></h2>
                        <p>Every engine tolerances differ. Select your vehicle details below to obtain manufacturer-approved viscosity and grade recommendations in real-time.</p>

                        <div className="stats-strip">
                            <div>
                                <strong>99.8%</strong>
                                <span>OEM Match Rate</span>
                            </div>
                            <div className="separator"></div>
                            <div>
                                <strong>12,000+</strong>
                                <span>Database Models</span>
                            </div>
                        </div>
                    </div>

                    <div className="panel-form-wrap">
                        <form onSubmit={(e) => e.preventDefault()} className="selector-form">
                            <div className="type-toggle">
                                <button
                                    type="button"
                                    className={vehicleType === 'car' ? 'active' : ''}
                                    onClick={() => setVehicleType('car')}
                                >
                                    Passenger
                                </button>
                                <button
                                    type="button"
                                    className={vehicleType === 'commercial' ? 'active' : ''}
                                    onClick={() => setVehicleType('commercial')}
                                >
                                    Commercial & Truck
                                </button>
                                <button
                                    type="button"
                                    className={vehicleType === 'moto' ? 'active' : ''}
                                    onClick={() => setVehicleType('moto')}
                                >
                                    Motorcycle
                                </button>
                            </div>

                            <div className="input-group">
                                <label>Manufacturer / Make</label>
                                <select value={make} onChange={(e) => setMake(e.target.value)}>
                                    <option value="">Select make (e.g. BMW, Chevrolet, Toyota)</option>
                                    <option value="bmw">BMW Group</option>
                                    <option value="chevrolet">Chevrolet / GM</option>
                                    <option value="toyota">Toyota / Lexus</option>
                                    <option value="mercedes">Mercedes-Benz</option>
                                    <option value="porsche">Porsche</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label>Model Year</label>
                                <select value={year} onChange={(e) => setYear(e.target.value)}>
                                    <option value="">Select production year</option>
                                    <option value="2024">2024 - Present</option>
                                    <option value="2020-2023">2020 - 2023</option>
                                    <option value="2015-2019">2015 - 2019</option>
                                    <option value="older">2014 & Prior</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label>Engine Capacity & Type</label>
                                <select>
                                    <option value="">Select engine code or displacement</option>
                                    <option value="turbo-petrol">Turbo Petrol (GDI / TSI / TFSI)</option>
                                    <option value="n-aspirated">Naturally Aspirated Petrol</option>
                                    <option value="common-rail">Common Rail Turbo Diesel (CRDi / DPF)</option>
                                    <option value="hybrid">Hybrid Engine System</option>
                                </select>
                            </div>

                            <button type="submit" className="finder-submit-btn">
                                Find Compatible Lubricants
                                <span className="arrow-icon">&rarr;</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}