import React from 'react'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import AuronSections from '../../components/sections/Sections'
import FeaturesSection from '../../components/featuresSection/FeaturesSection'
import CategorySection from '../../components/categorySection/CategorySection'
import OilSelectorSection from '../../components/oilSelectorSection/OilSelectorSection'
import TechSection from '../../components/techSection/TechSection'

const Home = () => {
    return (
        <div>
            <Hero />
            <CategorySection />
            <OilSelectorSection />
            <FeaturesSection />
            <TechSection />
        </div>
    )
}

export default Home