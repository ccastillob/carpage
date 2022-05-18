import CancelIcon from 'components/icons/static/CancelIcon';
import SuccessIcon from 'components/icons/static/SuccessIcon';
import React from 'react';

const ContainerButtonCheck = ({ id, isCheck }) => {
  return (
    <div className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
      {isCheck ? (
        <SuccessIcon id={id} isCheck={isCheck} width={32} />
      ) : (
        <CancelIcon id={id} isCheck={isCheck} width={32} />
      )}
    </div>
  );
};

export default ContainerButtonCheck;
