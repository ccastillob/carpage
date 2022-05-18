import React from 'react';

const SecondaryButton = ({ othersClass = '', icon, title = '', event }) => {
  return (
    <button
      onClick={event}
      className={`button button-secondary ${othersClass}`}
    >
      {icon}
      {title}
    </button>
  );
};

export default SecondaryButton;
