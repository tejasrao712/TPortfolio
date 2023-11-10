import React from 'react';

function AboutSection() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm Tejas Rao. I design and develop Full Stack Web Applications.
        With an exceptional skill set that encompasses front-end, back-end, and cloud-based development.
        I have a deep understanding of programming languages like JavaScript, Python, C and C++ as well as frameworks such as React.js.
        Proficient in databases, including MongoDB and MySQL, allows me to build scalable and secure applications. I am also well-versed in cloud computing platforms such as AWS, enabling me to develop applications with a global reach.
        My ability to analyze and solve complex technical problems ensures a smooth and efficient development process.

        Knowing that a Full Stack Developer with my background is not only highly skilled but also a highly sought-after asset in the software development industry. I am confident that my extensive experience and passion for continuous learning will make me an invaluable asset to any project or team.
      </p>

      {/* Experience Section */}
      <section className='Experience'>

        <h2>
          Work Experience
        </h2>

        <div>

          <div>
            <p>Front End developer</p>
            <p>Freelance</p>
          </div>

          <div>
            <p>Social Blazee</p>
            <p>Bengaluru</p>
            <p>Sept 2022 - Jan 2023</p>
          </div>

          <div>
            <p>Full Stack Web development Trainer</p>
            <p>Full Time</p>
          </div>

          <div>
            <p>Varcons Technologies</p>
            <p>Bengaluru</p>
            <p>March 2023 - Aug 2023</p>
          </div>

        </div>

      </section>

{/* Experience Section ends */}


{/* Education Section starts */}
      <section className='Education'>

        <h2>Education</h2>

        <div>

          <div>
            <p>Bachelor Of Engineering</p>
            <p>Full Time</p>
          </div>

          <div>
            <p>Shri Madhwa Vadiraja Institute of Technology and Management</p>
            <p>Udupi</p>
            <p>Aug 2018 - Aug 2022</p>
          </div>

        </div>

      </section>
{/* Education Section ends */}

</section>
)};



export default AboutSection;
