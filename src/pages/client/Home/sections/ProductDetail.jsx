import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../../../components/client/Header/index";
import Main from "../../../../pages/client/Home/sections/Main";
import SignUp from "../../../../pages/client/Home/sections/SignUp";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(res?.data.categories);
      setProduct(
        res?.data.categories.find((category) => category.idCategory === id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      <Header />
      <Main />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 50,
        }}
      >
        <div className="products-wrapper" style={{ width: 500, height: 600 }}>
          <img src={product.strCategoryThumb} alt="" />
          <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: 10 }}>
            {product.strCategory}
          </p>
          <p>{product.strCategoryDescription}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          ></div>
        </div>
      </div>
      <SignUp />
    </>
  );
};

export default ProductDetail;
