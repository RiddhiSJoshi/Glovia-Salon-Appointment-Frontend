import "./About.scss";

function About() {
  return (
    <div className="about-page">

      <section className="page-hero">
        <div className="container">
          <span className="section-label">
            ABOUT GLŌVIA
          </span>

          <h1>
            Beauty booking,
            <span> beautifully simple.</span>
          </h1>

          <p>
            Glōvia connects customers with salons and
            beauty professionals, making discovery and
            appointment booking simple.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-content">

          <div>
            <span className="section-label">
              OUR MISSION
            </span>

            <h2>
              Making self-care easier for everyone.
            </h2>
          </div>

          <p>
            We believe finding a salon should be simple.
            Instead of calling multiple salons or waiting
            for availability, Glōvia brings salons,
            services, stylists and appointments together
            in one place.
          </p>

        </div>
      </section>

    </div>
  );
}

export default About;