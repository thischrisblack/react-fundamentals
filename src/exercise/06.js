// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInput = React.useRef();
  const [ errorMessage, setErrorMessage ] = React.useState('');
  // I really wanted to null-check the username, so I'm putting it in state
  // You can't just access the ref.current.value :(
  const [ username, setUsername ] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(event) {
    const { value } = event.target;
    setUsername(value);
    const isLowerCase = value === value.toLowerCase();
    setErrorMessage(isLowerCase ? '' : '😡 Username must be lowercase.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input 
          type="text" 
          id="usernameInput" 
          ref={usernameInput} 
          onChange={handleChange} 
        />
        <div role="alert">{errorMessage}</div>
      </div>
      <button 
        type="submit" 
        disabled={!Boolean(username) || Boolean(errorMessage)}
      >
          Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
