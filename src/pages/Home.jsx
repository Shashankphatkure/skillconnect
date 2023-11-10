import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/accountcreation">AccountCreation</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/blogmanagement">Blogmanagement</Link>
        </li>
        <li>
          <Link to="/alljobs">Alljobs</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;