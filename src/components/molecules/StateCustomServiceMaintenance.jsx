import DescriptionStateCustomService from 'components/atoms/DescriptionStateCustomService';
import React from 'react';
import ContainerButtonCheck from './ContainerButtonCheck';

const StateCustomServiceMaintenance = ({ id, isCheck }) => {
  return (
    <>
      <ContainerButtonCheck id={id} isCheck={isCheck} />
      <DescriptionStateCustomService isCheck={isCheck} />
    </>
  );
};

export default StateCustomServiceMaintenance;
