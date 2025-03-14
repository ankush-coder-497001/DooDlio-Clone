import "./Team.css";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const teamMembers = [
    {
      name: "Sue Johnson",
      role: "Chief Design Officer",
      image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d8192b3cbc0eb32f244daf_avatar-1.avif",
      background: "yellow",
    },
    {
      name: "Tim Urban",
      role: "Lead Marketing Manager",
      image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d823812b855ff2d1c2a3c5_avatar-2.avif",
      background: "dark",
    },
    {
      name: "Amy Defrasco",
      role: "Data Analytics Manager",
      image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d83f24363f60566637e9f8_avatar-3.avif  ",
      background: "yellow",
    },
    {
      name: "Francis Doe",
      role: "Office Accountant",
      image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d8408cc58c2f75bca7f95f_avatar-4.avif",
      background: "dark",
    },
    {
      name: "Lisa Curtis",
      role: "Finance Analyst",
      image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d8417ea2ae187da8a0d159_avatar-5.avif",
      background: "yellow",
    },
    {
      name: "Jacob Frisk",
      role: "Junior Developer",
      image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d841821e1ef6038cd1e916_avatar-6.avif",
      background: "dark",
    },
  ]


  const container = useRef();

  useGSAP(() => {
    var tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.services-content',
          // markers: true,
          start: "50% center",
          end: "50% center",
          scrub: 1,
        }
      }
    );
    var tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.team-grid',
          // markers: true,
          start: "30% center",
          end: "30% center",
          scrub: 1,
        }
      }
    );

    tl.from('.section-header h2', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");

    tl.from('.section-header p', {
      opacity: 0,
      y: "-40%",
      duration: 1,
      delay: 1,
    }, "ab");

    tl2.from('.team-grid', {
      opacity: 0,
      y: "-20%",
      duration: 4,
      delay: 0.5,
    });

  }, { scope: container });

  return (
    <main ref={container}>
      <div className="sections-container">
        {/* Team Section */}
        <section className="team-section">
          <div className="section-header">
            <h2>Meet our Amazing Team</h2>
            <p>Squad of A'tier talents are ready to tackle any challenge you throw at them. Let's play!</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className={`team-member ${member.background}`}>
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-member-image" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>



        {/* CTA and Footer Section */}



      </div>
    </main>
  )
}

