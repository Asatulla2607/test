import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Menu = () => {
  const { product } = useSelector((s) => s);
  return (
    <div className="Menu">
      {product.length ? (
        <>
          <h1 className="text-menu">MENU</h1>
          <div className="container">
            <div className="menu">
              {product.map((el) => (
                <ProductCard el={el} />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Menu;
