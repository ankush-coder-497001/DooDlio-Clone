import React from "react";
import "./Pricing.css";
import circle from "./images/circled-out.svg"

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);


const Pricing = () => {
    const pricingPlans = [
        {
            type: "STARTER",
            title: "Personal",
            description: "Light and breezy.",
            price: "$35.00",
            img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e00f0fa31cc6c1e93a957a_personal-plan-icon.svg",
            popular: false,
        },
        {
            type: "POPULAR",
            title: "Commercial",
            description: "Get going today.",
            price: "$55.00",
            img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66dea5151ac3fcaeacb084ea_commercial-plan-icon_1.svg",
            popular: true,
        },
        {
            type: "PRO",
            title: "Extended",
            description: "For extensive use.",
            price: "$95.00",
            img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e00d162bded1eef7622a90_extended-pricing-icon.svg",
            popular: false,
        },
    ];


    const container = useRef();

    useGSAP(() => {
        var tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: '.pricing-container',
                    // markers: true,
                    start: "-20% center",
                    end: "-20% center",
                    scrub: 1,
                }
            }
        );
        var tl2 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: '.pricing-container',
                    // markers: true,
                    start: "10% center",
                    end: "10% center",
                    scrub: 1,
                }
            }
        );

        tl.from('.pricing-heading', {
            opacity: 0,
            y: "-50%",
            duration: 1,
        }, "ab");

        tl.from('.price_paragraph', {
            opacity: 0,
            y: "-40%",
            duration: 1,
            delay: 1,
        }, "ab");

        tl2.from('.pricing-grid', {
            opacity: 0,
            y: "-20%",
            duration: 4,
            delay: 0.5,
        });

    }, { scope: container });


    return (
        <main ref={container}>
            <div id="pricing" className="section pricing-section">
                <div className="container pricing-container">
                    <div className="text">
                        <div className="text-box pricing-text-box">
                            <img className="circle" src={circle} alt="" />
                            <h2 className="heading pricing-heading">Pricing that just fits</h2>
                        </div>
                        <p className="price_paragraph">
                            Our pricing plans cater to diverse needs, offering flexible options to suit your budget and requirements.
                        </p>
                    </div>
                    <div className="spacer"></div>

                    <div className="pricing-grid">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className={`pricing-card ${plan.popular ? "dark" : ""}`}>
                                <div className={`popular-wrap ${plan.popular ? "" : "outlined"}`}>
                                    <p className="type_paragraph">{plan.type}</p>
                                </div>
                                <img src={plan.img} alt={plan.title} className="plan-icon" />
                                <h3 className={`heading-71 ${plan.popular ? "light_color" : ""}`}>{plan.title}</h3>
                                <p className="paragraph pricing">{plan.description}</p>
                                <div className="pricing-wrapper">
                                    <h4 className={`price_heading ${plan.popular ? "price_popular" : ""}`}>{plan.price}</h4>
                                    <p className="paragraph">/ Per Single License</p>
                                </div>
                                <div className="spacer"></div>
                                <a href="#pricing" className={`button ${plan.popular ? "light" : "outline"} w-button`}>
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="spacer"></div>
                    <div className="custom-wrap">
                        <h1 className="bottom_heading custom-pricing-heading">Looking for custom Pricing?</h1>
                        <div className="contact-sales-wrap">
                            <a href="/" className="button accent w-button">
                                Sign Up Now
                            </a>
                            <img
                                src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2e8f737b0c44d92577c8a_arrow-down.svg"
                                alt="arrow"
                                className="arrow contact-sales"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Pricing;
