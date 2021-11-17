import React from "react";
import { Link } from "react-router-dom";
import "./HomeSecond.scss";

const HomeSecond = () => {
  return (
    <div className="homeSecond__container">
      <Link style={{ color: "white", textDecoration: "none" }} to="/quiz">
        <div className="button__for__blog">#quiztime</div>
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/blogs">
        <div className="button__for__blog">#blogs</div>
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/author">
        <div className="button__for__blog">#author</div>
      </Link>
 
    </div>
  );
};

export default HomeSecond;
