import React from "react";
import { useLocation } from "react-router-dom";
import HomeFooter from "./HomeFooter";
import CommonFooter from "./CommonFooter";

export default function Footer() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    if (isHomePage) {
        return <HomeFooter />;
    }

    return <CommonFooter />;
}