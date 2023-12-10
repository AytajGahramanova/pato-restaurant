import React, { useState, useEffect } from "react";
import axios from "axios";
import "../sections/Products.css";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setProduct(res?.data.categories);
      // console.log(res?.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  return (
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
      {product.slice(0, 3).map((item, index) => (
        <div key={index} className="products-wrapper-cards" >
          <img src={item.strCategoryThumb} alt="" />
          <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: 10 }}>
            {item.strCategory}
          </p>
          <p>{item.strCategoryDescription.slice(0, 200)}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <button
              style={{
                cursor: "pointer",
                border: "none",
                padding: 10,
                backgroundColor: "#FDF7E4",
              }}
              onClick={() => navigate(`/products/${item.idCategory}`)}
            >
              LEARN MORE
            </button>
            <Link to="/all-products">SEE ALL</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
