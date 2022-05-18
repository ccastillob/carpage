import { showImageProduct } from 'actions/ui';
import { useDispatch, useSelector } from 'react-redux';

const useUI = () => {
  const { showImage } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const uploadedImage = (event) => {
    if (event.type === 'load') {
      dispatch(showImageProduct());
    }
  };

  return {
    showImage,
    uploadedImage,
  };
};

export default useUI;
