import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import "./Content.scss"

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
};

export default Content;
