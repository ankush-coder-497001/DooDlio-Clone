import React from 'react'
import "./CaseStudies.css"

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

import img1 from "./images/cases/V/v-1.jpg"
import img2 from "./images/cases/V/v-2.jpg"
import img3 from "./images/cases/V/v-3.jpg"
import img4 from "./images/cases/V/v-4.jpg"
import img5 from "./images/cases/V/v-5.jpg"

import img6 from "./images/cases/CK/c-1.jpg"
import img7 from "./images/cases/CK/c-2.jpg"
import img8 from "./images/cases/CK/c-3.jpg"
import img9 from "./images/cases/CK/c-4.jpg"

import img10 from "./images/cases/T/c-1.jpg"
import img11 from "./images/cases/T/c-2.jpg"
import img12 from "./images/cases/T/c-3.jpg"
import img13 from "./images/cases/T/c-4.jpg"


const CaseStudies = () => {

    const vinted = [
        {
            "id": 1,
            "src": img1
        },
        {
            "id": 2,
            "src": img2
        },
        {
            "id": 3,
            "src": img3
        },
        {
            "id": 4,
            "src": img4
        },
        {
            "id": 5,
            "src": img5
        }
    ]

    const calvin = [
        {
            "id": 1,
            "src": img6
        },
        {
            "id": 2,
            "src": img7
        },
        {
            "id": 3,
            "src": img8
        },
        {
            "id": 4,
            "src": img9
        }
    ]

    const tom = [
        {
            "id": 1,
            "src": img10
        },
        {
            "id": 2,
            "src": img11
        },
        {
            "id": 3,
            "src": img12
        },
        {
            "id": 4,
            "src": img13
        }
    ]

    const container = useRef();
    const mm = gsap.matchMedia();

    useGSAP(() => {

        mm.add("(min-width: 1025px)", () => {
            gsap.to(".case_sections", {
                // xPercent: -1500, // Move 4 pages horizontally (100% per page, 4 pages = 300%)
                translateX: "-350vw",
                duration: 30,
                ease: "power1.in", // Disable easing for smooth horizontal scrolling
                scrollTrigger: {
                    trigger: ".case-studies", // Pin the parent container
                    // markers: true,
                    start: "10% 10%", // Start pinning when the parent hits the top of the viewport
                    end: "500% 10%", // End after scrolling through all 4 pages (4 * 100vh)
                    pin: true, // Pin the parent container
                    scrub: true, // Scrub the animation as you scroll
                    anticipatePin: 1, // Makes pinning smoother
                },
            })
        })


        mm.add("(min-width: 501px) and (max-width: 1024px)", () => {
            gsap.to(".case_sections", {
                translateX: "-760vw",
                duration: 30,
                ease: "power1.in", // Disable easing for smooth horizontal scrolling
                scrollTrigger: {
                    trigger: ".case-studies", // Pin the parent container
                    // markers: true,
                    start: "10% 10%", // Start pinning when the parent hits the top of the viewport
                    end: "350% 10%", // End after scrolling through all 4 pages (4 * 100vh)
                    pin: true, // Pin the parent container
                    scrub: true, // Scrub the animation as you scroll
                    anticipatePin: 1, // Makes pinning smoother
                },
            });

        });

        mm.add("(max-width: 500px)", () => {
            gsap.to(".case_sections", {
                translateX: "-1200vw",
                duration: 30,
                ease: "power1.in", // Disable easing for smooth horizontal scrolling
                scrollTrigger: {
                    trigger: ".case-studies", // Pin the parent container
                    // markers: true,
                    start: "10% 10%", // Start pinning when the parent hits the top of the viewport
                    end: "350% 10%", // End after scrolling through all 4 pages (4 * 100vh)
                    pin: true, // Pin the parent container
                    scrub: true, // Scrub the animation as you scroll
                    anticipatePin: 1, // Makes pinning smoother
                },
            });

        });

    }, { scope: container });


    return (
        <main ref={container}>
            <div className='case-studies'>
                <div className="case_sections">
                    <div className='case_section case_section1'>
                        <h1>Xudo</h1>
                        <div className="images">
                            {
                                vinted.map((item) => {
                                    return (
                                        <div id='img_div' key={item.id}>
                                            {item.id == 2 ? <p className='img-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, exercitationem cupiditate ipsum suscipit dolores qui temporibus architecto, possimus esse quis saepe, minus deserunt quam assumenda delectus deleniti totam autem fuga.</p> : <img src={item.src} alt="" />}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='case_section case_section2'>
                        <h1>Calvin</h1>
                        <div className="images">
                            {
                                calvin.map((item) => {
                                    return (
                                        <div id='img_div' key={item.id}>
                                            {item.id == 2 ? <p className='img-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, exercitationem cupiditate ipsum suscipit dolores qui temporibus architecto, possimus esse quis saepe, minus deserunt quam assumenda delectus deleniti totam autem fuga.</p> : <img src={item.src} alt="" />}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='case_section case_section3'>
                        <h1>Tom</h1>
                        <div className="images">
                            {
                                tom.map((item) => {
                                    return (
                                        <div id='img_div' key={item.id}>
                                            {item.id == 2 ? <p className='img-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, exercitationem cupiditate ipsum suscipit dolores qui temporibus architecto, possimus esse quis saepe, minus deserunt quam assumenda delectus deleniti totam autem fuga.</p> : <img src={item.src} alt="" />}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CaseStudies
