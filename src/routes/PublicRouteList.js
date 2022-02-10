
import Faq from "../components/frontend/faqComplete";
import Contact from "../components/frontend/ContactComplete";
import Home from "../components/frontend/Home";
import ViewCategory from "../components/frontend/collections/ViewCategory";

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

  { path: "/collections", exact: true, name: "ViewCategory",component: ViewCategory },

  ];

export default publicRoutesList;