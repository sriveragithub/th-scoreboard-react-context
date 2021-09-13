import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

export default () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" />
      <PlayerList />
      <AddPlayerForm />
    </div>
  );
}
