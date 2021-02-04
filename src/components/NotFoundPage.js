import React from 'react';
import { Link } from 'react-router-dom';
import useUpdateTitle from '../effects/useUpdateTitle';
import ErrorNotification from './ErrorNotification';

const NotFoundPage = () => {
  useUpdateTitle('404');

  return (
    <div>
      <Link to="/">
        <button className="btn-shamrock" type="button">
          <span>&larr; </span>
          Main page
        </button>
      </Link>
      <ErrorNotification>
        The page you are looking for could not be found
      </ErrorNotification>
    </div>
  );
};

export default NotFoundPage;
