import CardModel from './CardModel';

const ListOfModels = ({ models }) => {
  return (
    <section className="section-card ed-grid s-grid-12 rows-gap">
      {models.map(
        ({ _id, arrayColors, nameModel, descriptionModel, priceModel }) => (
          <CardModel
            key={_id}
            arrayColors={arrayColors}
            nameModel={nameModel}
            descriptionModel={descriptionModel}
            priceModel={priceModel}
          />
        )
      )}
    </section>
  );
};

export default ListOfModels;
