import React from "react";

const Home = () => {
  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <img src="images/beers.png" className="card-img-top" alt="All Beers" />
        <div className="card-body">
          <p className="card-text">Beers</p>
        </div>
      </div>
      <div className="card" style={{ width: "100%" }}>
        <img
          src="images/random-beer.png"
          className="card-img-top"
          alt="Random Beer"
        />
        <div className="card-body">
          <p className="card-text">Random Beer</p>
        </div>
      </div>
      <div className="card" style={{ width: "100%" }}>
        <img
          src="images/new-beer.png"
          className="card-img-top"
          alt="New Beer"
        />
        <div className="card-body">
          <p className="card-text">New Beer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
