const GhostButton = ({ othersClass = '', icon, title = '', event }) => {
  return (
    <button onClick={event} className={`button button-ghost ${othersClass}`}>
      {icon}
      {title}
    </button>
  );
};

export default GhostButton;
