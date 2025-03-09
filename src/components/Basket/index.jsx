import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";
const Basket = () => {
  const { basket } = useSelector((s) => s);
  const dispatch = useDispatch();

  function incrementQuantity(item) {
    dispatch({ type: "INCREMENT_QUATITY", payload: item });
  }
  return (
    <div className="Basket">
      {basket.length ? <h1>MY ORDERS</h1> : null}
      <div className="container">
        <div className="basket-card">
          {basket.map((el) => (
            <>
              <div className="BASKET">
                <div className="basket">
                  <Zoom>
                    <img className="basket-image" src={el.image} alt="" />
                  </Zoom>
                  <div className="basket-name">
                    <h1>{el.name}</h1>
                    <p className="basket-price">{el.price * el.quantity}</p>
                  </div>
                  <div className="basket-button">
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE_BASKET", payload: el })
                      }
                      className="basket-remove-btn"
                    >
                      delete order
                    </button>
                    <div className="incriments">
                      <button
                        className="order-btn"
                        onClick={() =>
                          dispatch({
                            type: "DECREMENT_QUANTITY",
                            payload: el,
                          })
                        }
                      >
                        -
                      </button>
                      <h6>{el.quantity}x</h6>
                      <button
                        className="order-btn"
                        onClick={() => incrementQuantity(el)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {basket.length ? (
        <Link to={"/menu"}>
          <button className="order-menu">to order</button>
        </Link>
      ) : null}
    </div>
  );
};

export default Basket;
