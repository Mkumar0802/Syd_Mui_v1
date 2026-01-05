import React from 'react'
import PFHGrid from "../../components/cards/PFHCard/PFHGrid"; // default import
import { PFHPeople } from "../../data/PFHCard";
import ProfileGrid from "../../components/cards/TestimonialCardBCVC/ProfileCard/ProfileGrid.jsx";

function Whoweare() {
    return (
        <div>
            <PFHGrid title="Our Leadership" items={PFHPeople} containerWidth="xl" />
            <ProfileGrid />
        </div>

    )
}

export default Whoweare