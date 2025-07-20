import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container text-center py-5">
      <h1>Lorem Ipsum Heading</h1>
      <h2>Lorem Ipsum Heading</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/" className="btn btn-secondary">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound; 