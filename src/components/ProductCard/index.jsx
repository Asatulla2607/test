/* eslint-disable react/prop-types */
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch } from "react-redux";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();

  function addToBasket(item) {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  }

  return (
    <div className="productCard">
      <div className="productcard">
        <Zoom>
          <img className="menu-image" src={el.image} alt="image" />
        </Zoom>
        <div className="">
          <h5 className="menu-name">{el.name}</h5>
          <div className="to-order">
            <span className="menu-Price">${el.price}</span>
            <button onClick={() => addToBasket(el)} className="menu-bottun">
              to order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
