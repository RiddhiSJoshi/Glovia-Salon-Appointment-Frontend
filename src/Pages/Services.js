import { categories } from "../Data/mockData";

import "./Services.scss";

function Services() {
  return (
    <div className="services-page">

      <section className="page-hero">
        <div className="container">

          <span className="section-label">
            SERVICES
          </span>

          <h1>
            Beauty services
            <span> made for you.</span>
          </h1>

          <p>
            Explore services offered by salons on the
            Glōvia platform.
          </p>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="service-list">

            {categories.map((category) => (
              <div
                className="service-item"
                key={category.id}
              >
                <div className="service-icon">
                  {category.icon}
                </div>

                <div>
                  <h2>{category.name}</h2>

                  <p>
                    {category.description}
                  </p>
                </div>

                <span className="service-arrow">
                  →
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default Services;