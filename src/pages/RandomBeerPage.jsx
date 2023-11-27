import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
      // setIsLoading(false);
    } catch (error) {
      console.error(error);
      navigate("/");
      // setIsLoading(false);
    }
  };

  return (
    <div>
      <h3 style={{ paddingLeft: '15px' }}>RandomBeerPage</h3>
      <div>
        <div>
          <img
            src={randomBeer.image_url}
            alt={randomBeer.name}
            style={{ width: "100px", paddingLeft: '15px' }}
          />
          <h2 style={{ paddingLeft: '15px' }}>{randomBeer.name}</h2>
          <p>{randomBeer.tagline}</p>
          <p style={{ paddingLeft: '15px' }}>First Brewed: {randomBeer.first_brewed}</p>
          <p style={{ paddingLeft: '15px' }}>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p style={{ paddingLeft: '15px' }}>Description: {randomBeer.description}</p>
          <p style={{ paddingLeft: '15px' }}>Contributed by: {randomBeer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}
