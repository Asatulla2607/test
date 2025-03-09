import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Create = () => {
  const { product } = useSelector((s) => s);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const dispatch = useDispatch();

  function addProduct() {
    if (productName === "" || productPrice === "" || productImage === "") {
      null;
    } else {
      const newProduct = {
        id: new Date(),
        image: productImage,
        name: productName,
        price: productPrice,
        quantity: 1,
        totalPrice: productPrice * 1,
      };
      dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    }

    setProductName("");
    setProductPrice("");
    setProductImage("");
  }

  return (
    <div>
      <div className="Create">
        <div className="container">
          <h1 className="create-product">CREATE PRODUCT</h1>
          <div className="create-block">
            <div className="create-email">
              <input
                className="email"
                type="text"
                placeholder="choose file"
                onChange={(e) => setProductImage(e.target.value)}
                value={productImage}
              />
              <input
                className="name"
                type="text"
                placeholder=" food name"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
              <input
                className="price"
                type="text"
                placeholder="price"
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
              />
            </div>
            <div className="block ">
              {productImage ? (
                <img src={productImage} alt="" />
              ) : (
                <h5>place for a photo</h5>
              )}
            </div>
          </div>

          <button onClick={() => addProduct()} className="create-button">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
