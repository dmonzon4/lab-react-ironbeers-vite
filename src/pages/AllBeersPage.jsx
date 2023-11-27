import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AllBeersPage() {
  const navigate = useNavigate();

  const [beersList, setBeerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setBeerList(response.data);
      // setIsLoading(false);
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  return (
    <div>
      <h2 style={{ paddingLeft: '15px' }}>List of Beers: </h2>
      <div className="all-beers-direction">
        {beersList.map((beer) => (
          <div key={beer._id} className="all-beers">
            <img
              src={beer.image_url}
              alt={beer.name}
              style={{ width: "100px" }}
            />
            <div className="all-beers-direction">
              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
            </div>
            <hr className="horizontal-line"/>
          </div>
        ))}
      </div>
    </div>
  );
}
