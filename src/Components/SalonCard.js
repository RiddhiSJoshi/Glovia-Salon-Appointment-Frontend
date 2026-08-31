import { Link } from "react-router-dom";

import "./SalonCard.scss";

function SalonCard({ salon }) {
  return (
    <article className="salon-card">
      <div className="salon-image">
        <div className="salon-image-content">
          <span>✦</span>
        </div>

        <span className="salon-rating">
          ★ {salon.rating}
        </span>
      </div>

      <div className="salon-content">
        <span className="salon-location">
          {salon.location}
        </span>

        <h3>{salon.name}</h3>

        <p>{salon.description}</p>

        <div className="salon-footer">
          <span>
            {salon.services} services
          </span>

          <Link to="/login">
            View Salon →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default SalonCard;