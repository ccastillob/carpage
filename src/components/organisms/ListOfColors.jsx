import ColorItem from 'components/atoms/ColorItem';
import useProduct from 'hooks/useProduct';
import React, { useEffect, useRef } from 'react';

const ListOfColors = ({ listColors }) => {
  const myLista = useRef(null);
  const { currentColor } = useProduct();

  useEffect(() => {
    myLista.current?.childNodes[0]?.classList.add('active');
    myLista.current?.childNodes[0]?.setAttribute('disabled', true);
  }, [listColors]);

  return (
    currentColor && (
      <>
        <div
          style={{ display: 'flex' }}
          ref={myLista}
          className="text__list-colors m-cols-4"
        >
          {listColors?.map(({ _id, nameColor, styleColor, imageColor }) => (
            <ColorItem
              key={_id}
              id={_id}
              nameColor={nameColor}
              styleColor={styleColor}
              imageColor={imageColor}
              refColors={myLista.current}
            />
          ))}
        </div>
        <h4 className="text__name-colors content-color m-cols-4 s-center s-pt-1">
          {currentColor[0]?.name}
        </h4>
      </>
    )
  );
};

export default ListOfColors;
