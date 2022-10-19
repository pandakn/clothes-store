import { Routes, Route } from "react-router-dom";
// Components
import Home from "./routes/home/Home";
import Navbar from "./routes/navbar/Navbar";
import Authentication from "./routes/authentication/Authentication";

const Shop = () => {
  return (
    <h1>Shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
