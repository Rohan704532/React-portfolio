import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Skills</h2>

      <section>
        <TestimonialCard
          name={"HTML"}
        />

        <TestimonialCard
          name={"CSS"}
        />

        <TestimonialCard
          name={"React"}
        />

        <TestimonialCard
          name={"Redux"}
        />

        <TestimonialCard
          name={"Python"}
        />
        <TestimonialCard
          name={"Node.js"}
        />
        <TestimonialCard
          name={"Django"}
        />
        <TestimonialCard
          name={"MongoDB"}
        />
        <TestimonialCard
          name={"Networking"}
        />
        <TestimonialCard
          name={"GIT"}
        />
        <TestimonialCard
          name={"EXPRESS"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
