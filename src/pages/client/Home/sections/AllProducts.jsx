import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../../components/client/Header/index";
import Main from "../../../../pages/client/Home/sections/Main";
import SignUp from "../../../../pages/client/Home/sections/SignUp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Drawer } from "antd";

const AddProducts = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [open, setOpen] = useState(false);
  const [basket, setBasket] = useState([]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const addToBasket = (item) => {
    const isAlreadyInBasket = basket.some((basketItem) => basketItem.idCategory === item.idCategory);
    if (!isAlreadyInBasket) {
      setBasket([...basket, item]);

    }
    onClose();
  };


  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      // console.log(res?.data);
      setProduct(res?.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filtered = product
    .filter((item) =>
      item.strCategory.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const comparison = a.strCategory.localeCompare(b.strCategory);

      return sortOrder === "A-Z" ? comparison : -comparison;
    });

  return (
    <>
      <Header />
      <Main />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "60px",
          gap: 20,
        }}
      >
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "15px", border: "2px solid rgba(0, 0, 0, 0.4)" }}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{
            padding: "15px 30px",
            border: "2px solid rgba(0, 0, 0, 0.4)",
          }}
        >
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 30,
        }}
      >
        <FavoriteBorderIcon onClick={showDrawer} />
        <ShoppingCartIcon />
      </div>
      <Drawer
        title="Favorities"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {basket.map((basketItem, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              width: "20rem",
              padding: 10,
              margin: 10,
            }}
          >
            <img
              src={basketItem.strCategoryThumb}
              alt=""
              style={{ width: 250 }}
            />
            <p style={{ marginBottom: 10 }}>
              <b>Category: </b>
              {basketItem.strCategory}
            </p>
            <p>
              <b>Description: </b>
              {basketItem.strCategoryDescription.slice(0, 200)}
            </p>
          </div>
        ))}
      </Drawer>
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
        {filtered.map((item, index) => (
          <div key={index} className="products-wrapper">
            <img src={item.strCategoryThumb} alt="" />
            <p
              style={{ fontWeight: "bold", fontSize: "20px", marginBottom: 10 }}
            >
              {item.strCategory}
            </p>
            <p>{item.strCategoryDescription.slice(0, 250)}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: 40,
                gap: 20,
              }}
            >
              <button
                style={{
                  border: "none",
                  padding: "15px 20px",
                  background: "#7B66FF",
                  color: "#fff",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Add to Basket
              </button>
              <button
                onClick={() => addToBasket(item)}
                style={{
                  border: "none",
                  padding: "15px 20px",
                  background: "#FA7070",
                  color: "#fff",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Add to Favorities
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 15,
              }}
            ></div>
          </div>
        ))}
      </div>
      <SignUp />
    </>
  );
};

export default AddProducts;
