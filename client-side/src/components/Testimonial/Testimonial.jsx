import React from 'react'
import "../Team/Team.css"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Jessica Jones",
    role: "Marketing Manager",
    image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f23e0bf52bf9ccb73a_testimonial-1-p-500.jpg",
    quote:
      "The social creatives from this team have completely elevated my brand’s online presence. They’re engaging, high-quality, and perfectly optimized for any platform. I couldn’t be happier!",
  },
  {
    name: "Ray Wild",
    role: "Consultant",
    image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f23e0bf52bf9ccb75b_testimonial-2-p-500.jpg",
    quote:
      "As a content creator, I’ve worked with many social media tools, but this one stands out. The quality, creativity, and seamless production process are unmatched, and the support is exceptional!",
  },
  {
    name: "Olivia Reyes",
    role: "Creative Director",
    image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f23e0bf52bf9ccb778_testimonial-4-p-500.jpg",
    quote:
      "These social creatives are a game-changer! They helped me boost engagement effortlessly, and their platform-optimized designs ensure my content looks stunning everywhere. I'll be using them every time!",
  },
  {
    name: "Bryan Styles",
    role: "SEO Specialist",
    image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f33e0bf52bf9ccb7bc_testimonial-6-p-500.jpg",
    quote:
      "Absolutely amazing! The social creatives are not only visually stunning but also highly engaging, which has significantly boosted my brand’s reach and audience interaction.",
  },
 
]
function Testimonial() {

  const container = useRef();

  useGSAP(() => {
    var tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.testimonials-section',
          // markers: true,
          start: "-5% center",
          end: "-5% center",
          scrub: 1,
        }
      }
    );
    var tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.testimonials-section',
          // markers: true,
          start: "10% center",
          end: "10% center",
          scrub: 1,
        }
      }
    );

    tl.from('.section-header h2', {
      opacity: 0,
      y: "-50%",
      duration: 1,
    }, "ab");

    tl.from('.section-header span', {
      opacity: 0,
      x: "-80%",
      duration: 1,
      delay: 1,
    }, "ab");

    tl2.from('.testimonials-grid', {
      opacity: 0,
      y: "-20%",
      duration: 4,
      delay: 0.5,
    });

  }, { scope: container });

  return (

    <main ref={container}>
      <section className="testimonials-section">
        <div className="section-header">
          <h2>
            We are met with cheers
            <br /><br />
            from the crowd!
          </h2>
          <span className="thumbs-up"><img src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e02f941b7b083ab4f7d83f_thumbs-up-light.svg" alt="" /></span>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </div>
          ))}
           <div  className="t-emoji" style={{}}>
            
             
            </div>
           <div  className="testimonial-card">
              <div className="testimonial-header">
                <img src={"https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f33e0bf52bf9ccb7fa_testimonial-8-p-500.jpg" } alt="Katie Brooks" />
                <div>
                  <h3>Katie Brooks</h3>
                  <p>unior Designer</p>
                </div>
              </div>
              <p className="testimonial-quote">"I was able to create high-quality social content without any design skills, thanks to the user-friendly creative tools. Highly recommended—my brand engagement is growing!"</p>
            </div>
        </div>
       
      </section>
    </main>
  )
}

export default Testimonial