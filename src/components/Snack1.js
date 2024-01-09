import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Chocolate Bar</h1>
      <p>Delicious and rich chocolate to satisfy your sweet cravings!</p>
      <img src="https://via.placeholder.com/150" alt="Chocolate Bar" />
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Snack1;