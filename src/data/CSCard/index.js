import imgA from "../../assets/home/service1.jpg";
import imgB from "../../assets/home/service1.jpg";
import imgC from "../../assets/home/service1.jpg";
import imgD from "../../assets/home/service1.jpg";
import imgE from "../../assets/home/service1.jpg";

const CSItems = [
    {
        id: "tech",
        image: imgA,
        title: "SAP Technical Specialisation",
        description:
            "World-class expertise in SAP Basis, NetWeaver, and cloud infrastructure. We build robust, scalable environments that power your business with confidence.",
        ctaLabel: "Explore Technical Expertise →",
        onCta: () => {
            console.log("Navigate to Technical Expertise");
        },
    },
    {
        id: "module",
        image: imgB,
        title: "SAP Module Specialisation",
        description:
            "Deep functional expertise across core SAP modules - FI/CO, MM, SD, PP, QM, PM, and HR - delivered by consultants who understand your industry.",
        ctaLabel: "Explore our SAP Module expertise →",
        onCta: () => {
            console.log("Navigate to SAP Module expertise");
        },
    },
    {
        id: "s4hana",
        image: imgC,
        title: "SAP S/4HANA Full Stack Services",
        description:
            "Expert S/4HANA implementation and migration services, plus modern user experiences with FIORI, UI5, and custom ABAP development that transform how your team works.",
        ctaLabel: "Discover S/4HANA Solutions →",
        onCta: () => {
            console.log("Navigate to S/4HANA Solutions");
        },
    },
    {
        id: "managed",
        image: imgD,
        title: "SVD Consulting Managed Services",
        description:
            "From strategic planning through implementation to proactive managed services, we're with you at every stage, ensuring continuous value and rapid innovation.",
        ctaLabel: "Discover our Managed Services →",
        onCta: () => {
            console.log("Navigate to Managed Services");
        },
    },
    {
        id: "resource",
        image: imgE,
        title: "Resource Augmentation",
        description:
            "Strengthen your SAP team with flexible, trusted expertise with our on-demand consultants who integrate seamlessly into your business to fill specialist gaps and deliver results when you need them.",
        ctaLabel: "Get the right SAP talent →",
        onCta: () => {
            console.log("Navigate to Resource Augmentation");
        },
    },
];

export default CSItems;