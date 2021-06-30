import React from "react";

const Home = ({ city, color, username }) => {

  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  )
}

export default Home;
