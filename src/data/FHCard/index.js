// src/data/FHCard/index.js

// 1) import images so the bundler knows about them
import ImpactImg from "../../assets/icons/FHCard/Impact.jpg";
import MasteryImg from "../../assets/icons/FHCard/Mastery.jpg";
import ReliabilityImg from "../../assets/icons/FHCard/Reliability.jpg";

// 2) use the imported variables as `image`
const FHCards = [
    {
        id: "impact",
        image: ImpactImg,
        imageLabel: "Impact",
        title: "Delivering Real Outcomes",
        description:
            "We measure success by the outcomes we create for our customers. We think big picture, act as part of your team, and communicate clearly so you always know what's happening. We simplify the complex, making SAP understandable, actionable, and outcome-driven.",
    },
    {
        id: "mastery",
        image: MasteryImg,
        imageLabel: "Mastery",
        title: "Deep SAP Expertise",
        description:
            "We bring specialist knowledge that adds real, visible value. Our team stays curious, keeps learning, and stays ahead of SAP updates and emerging technologies. We translate technical details into language business leaders can understand and deliver with precision.",
    },
    {
        id: "reliability",
        image: ReliabilityImg,
        imageLabel: "Reliability",
        title: "Standing by Our Work",
        description:
            "We do what we say and deliver every time. We keep promises with a 'no surprises' attitude, own mistakes and fix them fast, and stay transparent about timelines, risks, and progress.",
    },
];

export default FHCards;
