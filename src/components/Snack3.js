import React from 'react';
import { Link } from 'react-router-dom';

function Snack3() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Gummy Bears</h1>
      <p>Sweet and fruity, gummy bears are a delightful treat!</p>
      <img src="https://via.placeholder.com/150" alt="Gummy Bears" />
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Snack3;