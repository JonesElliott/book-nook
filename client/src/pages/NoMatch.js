import React from "react";
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div className="text-center">
          <header>
            <Link to="/">Go to Home </Link>
            <h1>404 Page Not Found</h1>
            <img src="./img/404.jpg" alt="http cat 404 not found" />
          </header>
    </div>
  );
}

export default NoMatch;