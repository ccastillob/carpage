import { updateListColors } from 'actions/product';
import { hiddenImageProduct } from 'actions/ui';
import { useDispatch } from 'react-redux';

const useColor = () => {
  const dispatch = useDispatch();

  const colorFocus = ({ evt, refColors, id, nameColor, imageColor }) => {
    const colorSelected = evt.target;

    colorSelected.classList.add('active');
    colorSelected.setAttribute('disabled', true);
    refColors.childNodes.forEach((element) => {
      if (element !== colorSelected) {
        element.classList.remove('active');
        element.removeAttribute('disabled');
      }
    });

    dispatch(updateListColors(id, nameColor, imageColor));
    dispatch(hiddenImageProduct());
  };

  return {
    colorFocus,
  };
};

export default useColor;
