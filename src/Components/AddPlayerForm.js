import React, { useRef } from 'react';

const AddPlayerForm = () => {
  const playerInput = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // actions.addPlayer(playerInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} >
      <input 
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"
      />            
      <input 
        type="submit"
        value="Add Player"
      />
    </form>
  );
}

export default AddPlayerForm;