import React, { useState } from 'react';

const Login: React.FC = () => {
  const [apiKey, setApiKey] = useState('');

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleLogin = () => {    
    console.log(apiKey);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter API Key"
        value={apiKey}
        onChange={handleApiKeyChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
