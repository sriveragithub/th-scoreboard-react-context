import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const Player = ({ index }) => {

    return ( 
      <div className="player">
        <span className="player-name">
          {/* <button 
            className="remove-player" 
            onClick={() => actions.removePlayer(players[index].id)}>✖
          </button>
          { players[index].name } */}
        </span>
        <Counter index={index} />
      </div>
    );
};

Player.propTypes = {
  index: PropTypes.number
};

export default Player;