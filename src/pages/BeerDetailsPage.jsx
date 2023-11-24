import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";

export default function BeerDetailsPage() {
  const navigate = useNavigate();

  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [beerId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      console.log(response.data); // Verificar la estructura de los datos en la consola
      setBeerDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  return (
    <div>
      <h3>BeerDetailsPage</h3>
      <div>
          <img src={beerDetails.image_url} alt={beerDetails.name} style={{ width: "100px" }} />
          <h2>{beerDetails.name}</h2>
          <p>{beerDetails.tagline}</p>
          <p>First Brewed: {beerDetails.first_brewed}</p>
          <p>Attenuation Level: {beerDetails.attenuation_level}</p>
          <p>Description: {beerDetails.description}</p>
          <p>Contributed by: {beerDetails.contributed_by}</p>
        </div>
    </div>
  );
}
