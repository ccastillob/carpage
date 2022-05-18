import CheckIcon from 'components/icons/special/CheckIcon';

const ServiceMaintenance = ({ nameDetail }) => {
  return (
    <div className="services__list s-cross-center s-cols-3">
      <CheckIcon />
      <h4 className="content-color-dark">{nameDetail}</h4>
    </div>
  );
};

export default ServiceMaintenance;
