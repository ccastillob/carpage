import React from 'react';
import useColor from 'hooks/useColor';

const ColorItem = ({ id, nameColor, styleColor, imageColor, refColors }) => {
  const { colorFocus } = useColor();

  const handleColor = (evt) => {
    colorFocus({ evt, id, nameColor, imageColor, refColors });
  };

  return (
    <button
      onClick={handleColor}
      className="colors__item"
      style={{ background: styleColor }}
    ></button>
  );
};

export default ColorItem;
