import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";

export default function BeerDetailsPage() {
  const { beerId } = useParams();
  const navigate = useNavigate();
  const [beerDetails, setBeerDetails] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

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
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  return (
    <div>
      <h3 style={{ paddingLeft: '15px' }}>BeerDetailsPage</h3>
      <div>
          <img src={beerDetails.image_url} alt={beerDetails.name} style={{ width: "100px", paddingLeft: '15px' }} />
          <h2 style={{ paddingLeft: '15px' }}>{beerDetails.name}</h2>
          <p style={{ paddingLeft: '15px' }}>{beerDetails.tagline}</p>
          <p style={{ paddingLeft: '15px' }}>First Brewed: {beerDetails.first_brewed}</p>
          <p style={{ paddingLeft: '15px' }}>Attenuation Level: {beerDetails.attenuation_level}</p>
          <p style={{ paddingLeft: '15px' }}>Description: {beerDetails.description}</p>
          <p style={{ paddingLeft: '15px' }}>Contributed by: {beerDetails.contributed_by}</p>
        </div>
    </div>
  );
}
