import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import logementsData from "../../data/logements.json";
import Card from "../components/Card";
import ImgHome from "../assets/ImgHome.png";

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <main>
      <section className="banner-home">
        <Banner imageUrl={ImgHome} text="Chez vous, partout et ailleurs" />
      </section>
      <section className="card-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </main>
  );
};

export default Home;
