import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import MainLayout from '../../layout/MainLayout'
import partnerImage from '../../assets/home/cloud_demo.jpg'
import CSItems from '../../data/CSCard'
import section_three from '../../data/HomePage/index.js'
import FourthSection from './FourthSection.jsx'



const partner = {
    imageSrc: partnerImage,
    eyebrow: "Partnering with New Zealand's Leading Organisations",
    quote:
        "They take real ownership – proactive, accountable, and committed to getting the job done.",
    company: "Kordia Group",
    ctaLabel: "Learn more",
    onCta: () => console.log("Partner CTA clicked"),
};


export default function HomePage() {
    return (
        <div>
            <FirstSection />
            <SecondSection partner={partner} csItems={CSItems} />
            <ThirdSection title="What makes SYD Consulting your Ideal SAP Partner"
                description="New Zealand organisations choose SYD when they want exceptional SAP expertise delivered with agility, transparency, and genuine partnership."
                ctaLabel="Explore who we are"
                items={section_three.sections} />
            <FourthSection
                image={partnerImage}
                eyebrow="Partnering with New Zealand's Leading Organisations"
                quote="They take real ownership – proactive, accountable, and committed to getting the job done. When challenges arise, SYD step up and deliver."
                company="Kordia Group"
                ctaLabel="Learn more"
                onCta={() => console.log("CTA clicked")} />

            {/* <MainLayout /> */}


        </div>
    )
}
