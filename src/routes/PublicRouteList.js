
import Faq from "../components/frontend/faqComplete";
import Contact from "../components/frontend/ContactComplete";
import Home from "../components/frontend/Home";
import Collections from "../components/frontend/Collections.js";
import ProductDetail from "../components/frontend/collections/ProductDetail.js";
import Cart from "../components/frontend/Cart.js";


import Page403 from "../components/errors/Page403";
import Page404 from "../components/errors/Page404";
import Register from "../components/frontend/auth/Register.js";
import Login from "../components/frontend/auth/Login.js";
import ViewCategory from "../components/frontend/collections/ViewCategory.js";


const publicRoutesList = [
  { path: "/", exact: true, name: "Home",component: Home },
  {
    path: "/faq",
    exact: true,
    name: "Faq",
    component: Faq,
  },
  {
    path: "/contact",
    exact: true,
    name: "Contact",
    component: Contact,
  },
  { path: "/collections", exact: true, name: "Collections",component: Collections },

  { path: "/403", exact: true, name: "Page403",component: Page403 },
  { path: "/404", exact: true, name: "Page404",component: Page404 },
  { path: "/login", exact: true, name: "Login",component: Login },
  { path: "/register", exact: true, name: "Register",component: Register },
  { path: "/collections", exact: true, name: "ViewCategory",component: ViewCategory },
  { path: "/collections/:category/:product", exact: true, name: "ProductDetail",component: ProductDetail },
  { path: "/cart", exact: true, name: "Cart",component: Cart },







  ];

export default publicRoutesList;