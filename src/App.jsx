// Components
import Directory from "./components/directory/Directory";
// Images
import hat from "./assets/categories/hat.jpg";
import jacket from "./assets/categories/jacket.jpg";
import sneaker from "./assets/categories/sneaker1.jpg";
import women from "./assets/categories/women3.jpg";
import men from "./assets/categories/men.jpg";

function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: hat,
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: jacket,
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: sneaker,
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: women,
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: men,
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default App;
