import { Link } from "react-router-dom";

interface CardProps {
  destination: string;
}

const Card = ({ destination }: CardProps) => {
  return (
    <div className="card">
      <Link to={destination}>
        <img src="image.jpg" alt="Card Image" />
        <div className="card-content">
          <h2>Card Title</h2>
          <p>Card description goes here.</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
