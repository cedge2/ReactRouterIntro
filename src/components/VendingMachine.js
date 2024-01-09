import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Vending Machine</h1>
      <p>Select a snack:</p>
      <div>
        <Link to="/snack1">Snack 1</Link>
      </div>
      <div>
        <Link to="/snack2">Snack 2</Link>
      </div>
      <div>
        <Link to="/snack3">Snack 3</Link>
      </div>
      {/* Add more links for additional snacks if needed */}
    </div>
  );
}

export default VendingMachine;