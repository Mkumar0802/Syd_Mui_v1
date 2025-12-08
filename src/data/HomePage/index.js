// src/data/HomePage/index.js
import imgA from "../../assets/home/Section3_1.jpg";
import imgB from "../../assets/home/Section3_2.jpg";
import imgC from "../../assets/home/Section3_3.jpg";

const section_three = {
    h2: "What makes SYD Consulting your Ideal SAP Partner",
    description: "New Zealand organisations choose SYD when they want exceptional SAP expertise delivered with agility, transparency, and genuine partnership. Here's what we bring to every engagement:",

    sections: [
        {
            id: "expertise",
            image: imgA,
            imageAlt: "SAP technical team working together",
            h3: "Deep SAP Expertise Without the Complexity",
            body: "Our team includes some of New Zealand's most sought-after SAP specialists that clients request by name. Experts in Basis, authorisations, S/4HANA, and FIORI development. We combine certified expertise with practical experience across 225+ projects, translating complex technical challenges into clear business solutions.",
            listTitle: "What we deliver:",
            bullets: [
                "SAP Basis and NetWeaver platform expertise",
                "S/4HANA implementation and migration services",
                "Custom ABAP development and FIORI applications",
                "SAP Business Warehouse and analytics",
                "Cloud architecture (SAP RISE, public and private cloud)",
            ],
        },
        {
            id: "delivery",
            image: imgB,
            imageAlt: "Agile team collaboration and planning",
            h3: "Agile, Responsive Delivery",
            body: "You work directly with senior consultants who understand your business and deliver results quickly. Our embedded partnership approach means we integrate seamlessly with your team, sharing knowledge and building capability while getting the job done efficiently.",
            bullets: [],
        },
        {
            id: "track-record",
            image: imgC,
            imageAlt: "Client partnership and project success",
            h3: "Proven Track Record",
            body: "12 years of trusted delivery. 225+ projects across 29 customers. We've partnered with iconic New Zealand brands like Zespri, Kordia, and Mitre 10, organisations that rely on us because we consistently deliver every time.",
            bullets: [],
        },
    ],
};

export default section_three;