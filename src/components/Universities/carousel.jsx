import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import c1 from "./images/c1.jpg";
import c8 from "./images/c8.jpg";
import c2 from "./images/c2.png";
import c3 from "./images/c3.png";
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
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c8}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block h-100 w-100"
                    src={c3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}