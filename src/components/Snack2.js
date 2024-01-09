import React from 'react';
import { Link } from 'react-router-dom';

function Snack2() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Potato Chips</h1>
      <p>Crunchy and savory, perfect for a quick snack!</p>
      <img src="https://via.placeholder.com/150" alt="Potato Chips" />
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Snack2;
