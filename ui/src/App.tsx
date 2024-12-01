import { useState } from 'react';
import { E } from '@endo/eventual-send';

function App() {
  const [userId, setUserId] = useState('');
  const [balance, setBalance] = useState(null);

  const registerUser = async () => {
    const publicFacet = await getPublicFacet(); // Replace with your publicFacet retrieval
    await E(publicFacet).registerUser(userId);
    alert(`User ${userId} registered!`);
  };

  const fetchBalance = async () => {
    const publicFacet = await getPublicFacet(); // Replace with your publicFacet retrieval
    const userBalance = await E(publicFacet).getUserBalance(userId);
    setBalance(userBalance);
  };

  return (
    <div>
      <h1>User Wallet App</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={registerUser}>Register</button>
      <button onClick={fetchBalance}>Check Balance</button>
      {balance !== null && <p>Balance: {balance}</p>}
    </div>
  );
}

export default App;