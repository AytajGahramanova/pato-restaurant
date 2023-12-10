import Root from "../pages/client/Root";
import Home from "../pages/client/Home";
import Menu from "../pages/client/Menu";
import Rezervation from "../pages/client/Rezervation";
import Gallery from "../pages/client/Gallery";
import About from "../pages/client/About";
import Blog from "../pages/client/Blog";
import Contact from "../pages/client/Contact";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import AllProducts from "../pages/client/Home/sections/AllProducts";
import ProductDetail from "../pages/client/Home/sections/ProductDetail";

export const ROUTES = [
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/rezervation",
        element: <Rezervation />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
];
