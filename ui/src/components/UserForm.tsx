import React, { useState } from 'react';
import axios from 'axios';

interface ResponseData {
  username: string;
  image: string;
}

const UserForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [response, setResponse] = useState<ResponseData | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await axios.post<ResponseData>('http://localhost:3500/sample', { username });
      setResponse(res.data);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <p>Username: {response.username}</p>
          <img src={response.image} alt="NFT" />
        </div>
      )}
    </div>
  );
};

export default UserForm;