import React from 'react'
import "../Team/Team.css"
const testimonials = [
  {
    name: "Jessica Jones",
    role: "Marketing Manager",
    image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f23e0bf52bf9ccb73a_testimonial-1-p-500.jpg",
    quote:
      "The templates from this site have completely transformed my business website. They're sleek, modern, and easy to customize. I couldn't be happier!",
  },
  {
    name: "Ray Wild",
    role: "Consultant",
    image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f23e0bf52bf9ccb75b_testimonial-2-p-500.jpg",
    quote:
      "As a freelance web designer, I've tried numerous template sites, but this one stands out. The quality and variety of designs are unmatched, and the customer support is top-notch!",
  },
  {
    name: "Olivia Reyes",
    role: "Creative Director",
    image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f23e0bf52bf9ccb778_testimonial-4-p-500.jpg",
    quote:
      "These templates are a game-changer! They helped me launch my blog in no time, and the mobile-friendly designs mean my site looks great on any device.Looking to use them every time.",
  },
  {
    name: "Bryan Styles",
    role: "SEO Specialist",
    image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f33e0bf52bf9ccb7bc_testimonial-6-p-500.jpg",
    quote:
      "Absolutely amazing! The templates are not only visually stunning but also SEO-friendly, which has significantly improved my site's traffic and engagement has skyrocketed.",
  },
  {
    name: "Katie Brooks",
    role: "Junior Designer",
    image: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66e025f33e0bf52bf9ccb7fa_testimonial-8-p-500.jpg",
    quote:
      "I was able to create a professional-looking website without any coding knowledge, thanks to the user-friendly templates. Highly recommended, my business is growing!",
  },
]
function Testimonial() {
  return (

       <section className="testimonials-section">
       <div className="section-header">
         <h2>
           We are met with cheers
           <br />
           from the crowd!
         </h2>
         <span className="thumbs-up">👍</span>
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
       </div>
       <div className="emoji-decoration">
         <span>😊</span>
         <span>😄</span>
         <span>🙂</span>
       </div>
     </section>
  )
}

export default Testimonial