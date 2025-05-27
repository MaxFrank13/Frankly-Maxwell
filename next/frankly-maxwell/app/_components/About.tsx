// import Image from "next/image";
import React from "react";
import skillsData from "@/app/_data/skills.json"

export default function About () {
  return (
    <section className="page" id="about">
      <h2>
        about
      </h2>
      <section className="about-content">
        {/* <p>
          <Image
            src="/images/portrait.jpg"
            alt="Portrait"
            width={500} 
            height={500}
          />
          A full stack web developer from Maine.
        </p> */}
        <p>
          Software engineer with years of experience in web development.
        </p>
        <p>
          My free time is spent outdoors. I enjoy hiking and spending time at the beach. However, the my main passion is 
          <a href="http://www.theidsa.org/" target="_blank"> distance skateboarding</a>.
        </p>
        <p>
          {skillsData.skills.join(' | ')}
        </p>
      </section>
    </section>
  )
}