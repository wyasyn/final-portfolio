import React from 'react'
import {Cta, Heading} from "../components"
import {Intro} from "../components"


function About() {
  return (
    <section className='about'>
      <div className="about-container container">
        <div className="buttons">
          <Heading 
          subheading="about Yasin"
          heading="Web Developer"
          />
        </div>

        <Intro />

        <div className="content-1">
            <p>
            I am deeply committed to delivering high-quality work and ensuring client satisfaction. I take the time to understand your unique requirements and tailor solutions that align with your vision and business objectives. From conceptualization to deployment and beyond, I offer end-to-end web development services, including front-end and back-end development, content management system (CMS) integration, e-commerce solutions, and website maintenance. <br />

            Constantly staying up-to-date with the latest trends and advancements in web development, I strive to implement innovative techniques and best practices in my projects. I enjoy working in collaborative environments, and I'm always open to feedback and suggestions, as I believe that effective communication is crucial to delivering exceptional results.
            </p>

            <p>
            Beyond my technical skills, I am a creative problem solver, adept at troubleshooting and finding efficient solutions to complex challenges. I approach each project with a meticulous approach, ensuring clean and scalable code that enhances website performance and optimizes loading times. <br />

            I invite you to explore my portfolio to get a glimpse of my previous work and the diverse range of projects I've undertaken. If you're looking for a reliable web developer who can transform your ideas into reality, please don't hesitate to get in touch. I'm excited to be part of your journey in establishing a strong online presence and achieving digital success.
            </p>
        </div>

        <div className="buttons">
          <Cta
          url="/portfolio"
          text="See Portfolio"
           />
        </div>

        <div className="content education">
          <div className="col-1">
            <h3>Education</h3>
            <p>Bachelor's Degree in Computer Science</p>
            <p>Mathematics Major</p>
            <p>Physics Minor</p>
          </div>
          <div className="col-2">
            <h3>Location</h3>
            <p>Kampala, Uganda</p>
            <p>Kyaliwajala, Wakiso</p>
          </div>
          <div className="col-2">
            <h3>Skills</h3>
            <p>HTML, CSS, Sass and JavaScript, TypeScript</p>
            <p>React and React Native</p>
            <p>Python, C, C++ and Java</p>
            <p>Leadership</p>
          </div>
        </div>
        <div className="buttons">
              <Cta 
              url="/contact"
              text="Contact Me"
              />
        </div>
        <div className="content">
          <div className="mission">
          <h3>
            Mission
          </h3>
          <p>
            "Our mission is to craft exceptional digital experiences that empower businesses and individuals to thrive in the online world. Through innovative web development solutions, we aim to transform ideas into reality, blending creativity with cutting-edge technologies. We are dedicated to delivering tailored, user-centric websites and applications that not only captivate and engage audiences but also drive tangible results. With a relentless commitment to quality, collaboration, and continuous improvement, we strive to be the trusted partner for businesses seeking to establish a strong and impactful online presence. Together, let's build the future of the web."
          </p>
          </div>
          <div className="mission">
          <h3>
            Vision
          </h3>
          <p>
          "Our vision is to revolutionize the digital landscape by pushing the boundaries of web development, consistently setting new industry standards and inspiring innovation. We envision a future where every online interaction is seamless, immersive, and memorable. Through our expertise, passion, and relentless pursuit of excellence, we aspire to become a catalyst for positive change, shaping the way businesses and individuals connect, engage, and thrive in the digital age. We aim to be recognized as the leading force in transforming ideas into extraordinary digital experiences, empowering our clients to unleash their full potential and achieve their goals. Together, we envision a limitless online world where creativity, technology, and human connection converge to create limitless possibilities."
          </p>
          </div>
          <div className="mission">
          <h3>
              Value Statement
          </h3>
          <p>
          "We are committed to delivering exceptional value to our clients by providing high-quality web development services that exceed their expectations. We strive to optimize efficiency, cost-effectiveness, and innovation in every project we undertake, ensuring maximum return on investment for our clients."
          </p>
          </div>
        </div>



      </div>
    </section>
  )
}

export default About