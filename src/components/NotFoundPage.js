import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <Link to="/">
      <button className="btn-shamrock" type="button">
        <span>&larr; </span>
        Main page
      </button>
    </Link>
    <div className="mt-4">
      <p className="text-7xl text-center text-shamrock-500">:(</p>
      <p className="mt-8 text-xl text-center">
        404 - The page you are looking for could not be found
      </p>
    </div>
  </div>
);

export default NotFoundPage;
