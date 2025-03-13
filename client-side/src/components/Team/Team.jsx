import "./Team.css";
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



  return (
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
  )
}

