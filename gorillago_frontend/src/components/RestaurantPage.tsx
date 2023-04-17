import { useParams } from "react-router-dom";

function RestaurantPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Restaurant {id}</h1>
      // add restaurant details here
    </div>
  );
}

export default RestaurantPage;