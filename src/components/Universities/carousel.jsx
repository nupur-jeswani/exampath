import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import c1 from "./images/_Adelaide_University_Aussie.jpg";
import c2 from "./images/university of toronto_Canada.jpg";
import c3 from "./images/UniofCambridge_UK.jpg";
import c4 from "./images/StanfordUni_USA.jpg";
import c5 from "./images/IIM Ahemdabad.jpg";
import c6 from "./images/TechnicalUniDresden_Germany.jpg";
import c7 from "./images/MIT_USA.jpg";
import c8 from "./images/Uni of MElbourne_Aussie.jpg";
import c9 from "./images/TechnicalUniMunich_Germany.jpg";
import c10 from "./images/TrinityCollege_Ireland.jpg";
import c11 from "./images/UniofOxford_UK.jpg";
import c12 from "./images/UniofAmsterdam_Netherlands.jpg";
import c13 from "./images/UniofSydney_Aussie.jpg";

import "./carousel.css";


export function UniCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c1}
                    alt="First slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>ADELAIDE UNIVERSITY</h1>
                    <h3>AUSTRALIA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c2}
                    alt="Second slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>UNIVERSITY OF TORONTO</h1>
                    <h3>CANADA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c3}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>UNIVERSITY OF CAMBRIDGE</h1>
                    <h3>UNITED KINGDOM</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c4}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>STANFORD UNIVERSITY</h1>
                    <h3>UNITED STATES OF AMERICA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c5}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>IIM AHEMDABAD</h1>
                    <h3>INDIA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c6}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>TECHNICAL UNIVERSITY DRESDEN</h1>
                    <h3>GERMANY</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c7}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>MASSACHUSETTS INSTITUTE OF TECHNOLOGY</h1>
                    <h3>UNITED STATES OF AMERICA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c8}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>UNIVERSITY OF MELBOURNE</h1>
                    <h3>AUSTRALIA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c9}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>TECHNICAL UNIVERSITY MUNICH</h1>
                    <h3>GERMANY</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c10}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>TRINITY COLLEGE</h1>
                    <h3>IRELAND</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c11}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>UNIVERSITY OF OXFORD</h1>
                    <h3>UNITED KINGDOM</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c12}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>UNIVERSITY OF AMSTERDAM</h1>
                    <h3>NETHERLANDS</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c13}
                    alt="Third slide"
                />
                <Carousel.Caption className="collegeDetail-carousel">
                    <h1>UNIVERSITY OF SYDNEY</h1>
                    <h3>AUSTRALIA</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}