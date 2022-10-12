import { Outlet } from "react-router-dom";
// Components
import Directory from "../../components/directory/Directory";
// Images
import hat from "../../assets/categories/hat.jpg";
import jacket from "../../assets/categories/jacket.jpg";
import sneaker from "../../assets/categories/sneaker1.jpg";
import women from "../../assets/categories/women3.jpg";
import men from "../../assets/categories/men.jpg";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hat",
      imageUrl: hat,
    },
    {
      id: 2,
      title: "Jacket",
      imageUrl: jacket,
    },
    {
      id: 3,
      title: "Sneaker",
      imageUrl: sneaker,
    },
    {
      id: 4,
      title: "Women",
      imageUrl: women,
    },
    {
      id: 5,
      title: "Men",
      imageUrl: men,
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
