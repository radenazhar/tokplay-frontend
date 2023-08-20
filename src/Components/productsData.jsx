import Product from "./products";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductList({ id }) {
  const [productList, setProductList] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        setProductList(res.data);
      })
      .finally(() => setIsLoad(false));
  }, []);
console.log(productList)
  return (
    <div className="row row-cols-1 row-cols-md-5 g-4 mt-1 mb-5">
      {isLoad ? (
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      ) : productList.length === 0 ? (
        <h6>Data produk tidak tersedia</h6>
      ) : (
        productList.map((el) => {
          return <Product productData={el} key={el._id} />;
        })
      )}
    </div>
  );
}

export default ProductList;
