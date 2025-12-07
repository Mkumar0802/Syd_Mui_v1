import imgA from "../../assets/home/service1.jpg";
import imgB from "../../assets//home/service1.jpg";
import imgC from "../../assets/home/service1.jpg";

const CSItems = [
    {
        id: "tech",
        image: imgA,
        title: "SAP Technical Specialisation",
        description:
            "World-class expertise in SAP Basis, NetWeaver, and cloud infrastructure. We build robust, scalable environments that power your business with confidence.",
        ctaLabel: "Explore Technical Expertise →",
        onCta: () => {
            // optional: navigate or track
            console.log("Navigate to Technical Expertise");
        },
    },
    {
        id: "module",
        image: imgB,
        title: "SAP Module Specialisation",
        description:
            "Deep functional expertise across core SAP modules - FI/CO, MM, SD, PP, QM, PM and HR - delivered by consultants who understand your industry.",
        ctaLabel: "Explore our SAP Module expertise →",
    },
    {
        id: "s4hana",
        image: imgC,
        title: "SAP S/4HANA Full Stack Services",
        description:
            "Expert S/4HANA implementation and migration services, plus modern user experiences with FIORI, UI5 and custom ABAP development.",
        ctaLabel: "Discover S/4HANA Solutions →",
    },
];

export default CSItems;
