import React from 'react'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import AuronSections from '../../components/sections/Sections'
import FeaturesSection from '../../components/featuresSection/FeaturesSection'
import CategorySection from '../../components/categorySection/CategorySection'
import OilSelectorSection from '../../components/oilSelectorSection/OilSelectorSection'
import TechSection from '../../components/techSection/TechSection'
import ItemProduct from '../../itemProduct/ItemProduct'

const Home = () => {
    return (
        <div>
            <Hero />
            <CategorySection />
            <OilSelectorSection />
            <FeaturesSection />
            <TechSection />
            <ItemProduct />
        </div>
    )
}

export default Home