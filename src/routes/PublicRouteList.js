import Home from "../components/frontend/Home";
import Faq from "../components/frontend/faqComplete";
import Contact from "../components/frontend/ContactComplete";
import Page403 from "../components/errors/Page403";
import Page404 from "../components/errors/Page404";
import Register from "../components/frontend/auth/Register"; 
import Login from "../components/frontend/auth/Login";
import ViewCategory from "../components/frontend/collections/ViewCategory";
import ViewProduct from "../components/frontend/collections/ViewProduct";


const publicRoutesList = [
  { path: "/", exact: true, name: "Home",component: Home },
  { path: "/faq", exact: true, name: "Faq", component: Faq },
  { path: "/contact", exact: true, name: "Contact", component: Contact },
  { path: "/403", exact: true, name: "Page403", component: Page403 },
  { path: "/404", exact: true, name: "Page404", component: Page404 },
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/register", exact: true, name: "Register", component: Register },
  { path: "/collections", exact: true, name: "ViewCategory",component: ViewCategory },
  { path: "/collections/:slug", exact: true, name: "ViewProduct", component: ViewProduct},

  ];

export default publicRoutesList;